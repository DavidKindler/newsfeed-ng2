import { Component, OnInit, EventEmitter, Input, Output, OnDestroy  } from '@angular/core';
import { RSSService} from '../rss.service';
import { RegionService } from '../region.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
// import { SharedModule }        from '../shared/shared.module';

import * as _ from 'underscore';

@Component({
  selector: '.rss-list',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css'],
  providers: [RegionService, RSSService]
})
export class RssComponent  implements OnInit, OnDestroy {
  private _region: Object;
  private _rssItems: Object;
  error: string;
  pageSize = 10;
  currentItem;
  subscription;

  // @Input() rssItems: any[];
  // rssItems : any[];
  // rssItemsPaged: any[];
  rssItems = [];
  rssItemsPaged = [];
  @Output() rssUpdate = new EventEmitter();
  @Output() checkAllEvent = new EventEmitter();

  constructor( 
    private region: RegionService, 
    private _rssService: RSSService, 
    private _route: ActivatedRoute,
    private _router: Router
    // private _router: Router
    ) { 
   
    }

  ngOnInit() {
   
    this.subscription = this._route.params.subscribe( (params) => {
      this._region = this.loadRegion(params);
      this._rssItems = this.loadRss(this._region).subscribe( (items) => {
        this.error = null;
        this.rssItems = items;
        this.rssItems.forEach((item)=> items.checked = false);
        this.rssItemsPaged = _.take(this.rssItems, this.pageSize);
      }, (err) => {
        console.log ('got an server error', err);
        this.error = err; 
        this.rssItems = null;
        this.rssItemsPaged = null;
      });
    })
    
  }
  private loadRegion(params){
    // console.log (params)
    return this.region.getRegion(params);
  }

  private loadRss(region){
    // console.log ('loadRSS', this._rssService.getRss(region))
    return this._rssService.getRss(region);
  }

  ngOnDestroy(){
    // console.log ('Destroy', this._route);
    this.subscription.unsubscribe();
  }
  
  rssDelete(item) {
    if ( !confirm('Please confirm change') ) {
      return;
    }
    item.deleted= !item.deleted;
    item.region = this._region["code"];
    // console.log ('item from rssDElete',item)
    this._rssService.deleteItem(item).subscribe( (data) => {
        this.error=null;
      }, (err) => {
        console.log ('got an server error', err);
        this.error = err; 
    });

    this.rssUpdate.emit(item)
    // deleteItem(item);
    console.log ('delete item ' + item.deleted);
  }

  // rssUndelete(item) {
  //   item.deleted = !item.deleted;
  //   this.rssUpdate.emit(item)
  //  console.log ('undelete item ' + item.id);
  // }

  rssEdit(item) {
    item.region = this._region["code"];
    // this._rssService.getRssItem(item).subscribe( (data)=> {
    //   this.error = null;
    //   this.currentItem = data;
    //   // console.log ('edit item ' + item, this.currentItem);
    // }, (err) => {
    //     console.log ('got a server error',err);
    //     this.error=err;
    // })
    // this.currentItem = item;
    // item.title = "CHANGED " + item.title;
    // this.rssUpdate.emit(item);
    //  this._route.
    //  routerLink="['/users', user.id]">
    // console.log (JSON.stringify(item));
    this._router.navigate(['news/edit/', item.region, item.url]);
    
  }

   onCheckAllEvent(event){
    console.log ('onCheckAllEvent',event);
    // item.deleted = !item.deleted;
  }

  checkAll($event){
    console.log ('check/uncheck all items');
    this.checkAllEvent.emit();
  }

  onRssUpdate(item){
    console.log ('RssComponent onRssUpdate',item);
    // item.deleted = !item.deleted;
  }
  
  onPageChanged(page) {
        let startIndex = (page - 1) * this.pageSize;
        this.rssItemsPaged = _.take(_.rest(this.rssItems, startIndex), this.pageSize);
	}
}
