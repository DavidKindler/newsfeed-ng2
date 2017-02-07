import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import {  Router,  ActivatedRoute} from '@angular/router';

import {  BasicValidators } from '../shared/basicValidators';
import {  RSSService } from '../rss.service';
import {  RegionService } from '../region.service';
import {  RSSItem } from './rss';
import {  DomSanitizer } from '@angular/platform-browser';
import  { SanitizeHtml } from '../shared/sanitize-html.pipe';

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
    private _rssService: RSSService,
    private _sanitizer: DomSanitizer
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

// console.log(decodeEntities('1 &amp; 2'));
  ngOnInit() {
    let self = this;
    var item = self._route.params.subscribe(params => {
     
      // var url = decodeURIComponent(decodeURIComponent(params["url"]));
      // console.log ('params',params, url)
      // params["url"] = url;
      self._region = self.region.getRegion(params);
      if (params["url"]) {
        self.header =  "Edit Item";
        
        // self._rssService.getRss(region);
        //  self._rssService.getItem(url)
        // .subscribe(
        //   user => self.user = user,
        //   response => {
        //     if (response.status == 404) {
        //       self._router.navigate(['NotFound']);
        //     }
        //   });
            
            self._rssService.getRssItem(params).subscribe( (item)=> {
              self.error = null;
              self.rssItem = item;
              self.rssItem.title = self.decodeEntities(item.title);
              self.rssItem.url = self.decodeEntities(item.url);
              self.rssItem.newsdate = item.newsdate.slice(0,10);

              // console.log (item.newsdate,this.rssItem)
            }, (err) => {
                console.log ('got a server error',err);
                self.error=err;
            })
      } else {
        self.header = self._region["name"] + ": Add News Item";
        return;
      }
      // var region = self._route.params.subscribe(params => {
      //   self._region = self.region.getRegion(params);
      //   self.header = self._region["name"] + ": Add News Item";
      // });

    });
  }

  save() {
    var result;
    let self = this;
    self.rssItem.newsdate = self.form.value.newsdate + ' 01:00:00';
    self.rssItem.region = self._region["code"];
    // self.rssItem.category = "Press Release";
    // console.log ('save rssItem',self.rssItem)


    result = self._rssService.addItem(self.rssItem)

    result.subscribe( (data) => {
        self.form.reset();
        // Ideally, here we'd want:
        // self.form.markAsPristine();
        self._router.navigate(['news',  self._region["code"] ]);
      }, (err) => {
        console.log ('got an server error', err);
        self.error = err; 
    });

  }

}
