import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import {  Router,  ActivatedRoute} from '@angular/router';

import {  BasicValidators } from '../shared/basicValidators';
import {  RSSService } from '../rss.service';
import {  RegionService } from '../region.service';
import {  RSSItem } from './rss';
// import {  DomSanitizer } from '@angular/platform-browser';
// import  { SanitizeHtml } from '../shared/sanitize-html.pipe';
import * as he from 'he';

@Component({
  selector: 'rss-rss-form',
  templateUrl: './rss-form.component.html',
  styleUrls: ['./rss-form.component.css'],
  providers: [RegionService,RSSService]
})

export class RssFormComponent implements OnInit {
  form: FormGroup;
  header: string;
  error: string;
  rssItem = new RSSItem();
  private _region: Object;

  constructor(
    fb: FormBuilder,
    private region: RegionService, 
    private _router: Router,
    private _route: ActivatedRoute,
    private _rssService: RSSService
    // private _sanitizer: DomSanitizer
  ) {
    this.form = fb.group({
      title:['',Validators.required],
      url:['',Validators.required],
      newsdate: ['',Validators.required]
    })
   }

   private decodeEntities(encodedString: string) {
      var textArea = document.createElement('textarea');
      textArea.innerHTML = encodedString;
      return textArea.value;
    }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._region = this.region.getRegion(params);
      if (params["url"]) {
        this.header =  "Edit Item";
        this.getItem(params)
      } else {
        this.header = this._region["name"] + ": Add News Item";
        return;
      }
    });
  }
  getItem(params){
     this._rssService.getRssItem(params).subscribe( (item)=> {
          this.error = null;
          this.rssItem = item;
          // this.rssItem.title = this.decodeEntities(item.title);
          // this.rssItem.url = this.decodeEntities(item.url);
          this.rssItem.title = he.decode(item.title);
          this.rssItem.url = he.decode(item.url);
          this.rssItem.newsdate = item.newsdate.slice(0,10);
          }, (err) => {
                console.log ('got a server error',err);
                this.error=err;
      })
  }

  save() {
    var result;
    this.rssItem.newsdate = this.form.value.newsdate + ' 01:00:00';
    this.rssItem.region = this._region["code"];
    // this.rssItem.category = "Press Release";
    // console.log ('save rssItem',this.rssItem)
    let temp = this.rssItem.title;
    this.rssItem.title = he.encode(temp);
    temp = this.rssItem.url;
    this.rssItem.url = he.encode(temp);

    result = this._rssService.addItem(this.rssItem)

    result.subscribe( (data) => {
        this.form.reset();
        // Ideally, here we'd want:
        // this.form.markAsPristine();
        this._router.navigate(['news',  this._region["code"] ]);
      }, (err) => {
        console.log ('got an server error', err);
        this.error = err; 
    });

  }

}
