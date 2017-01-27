import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import {  Router,  ActivatedRoute} from '@angular/router';

import {  BasicValidators } from '../shared/basicValidators';
import {  RSSService } from '../rss.service';
import {  RegionService } from '../region.service';
import {  RSSItem } from './rss';
// import { DatepickerModule } from 'ng2-bootstrap/datepicker';

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
  ) {
    this.form = fb.group({
      title:['',Validators.required],
      url:['',Validators.required],
      date: ['',Validators.required]
    })
   }

  ngOnInit() {
    var region = this._route.params.subscribe(params => {
      this._region = this.region.getRegion(params);
      this.header = this._region["name"] + ": Add News Item";
    });

  }

  save() {
    var result;
    
    this.rssItem.newsdate = this.form.value.date['formatted'] + ' 01:00:00';
    this.rssItem.region = this._region["code"];
    this.rssItem.category = "Press Release";
    // console.log ('save rssItem',this.rssItem)


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
