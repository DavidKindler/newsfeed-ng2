import { Component, OnInit, EventEmitter, Input, Output, OnDestroy  } from '@angular/core';
import { RSSService} from '../rss.service';
import { RegionService } from '../region.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: '.rss-list',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css'],
  providers: [RegionService, RSSService]
})
export class RssComponent  implements OnInit, OnDestroy {
  private _region: Object;
  private _rssItems: Object;

  subscription;

  // @Input() rssItems: any[];
  private rssItems : any[];
  @Output() rssUpdate = new EventEmitter();
  @Output() checkAllEvent = new EventEmitter();

  constructor( 
    private region: RegionService, 
    private rssService: RSSService, 
    private route: ActivatedRoute
    // private _router: Router
    ) { 
   
    }

  ngOnInit() {
    // this.loadRegion(this.route.params);
    // this.loadRss(this._region);
    this.subscription = this.route.params.subscribe( (params) => {
      // console.log ("PARAMS" , params)
      // this._region = {"name": "US", "code": "en"};
      this._region = this.loadRegion(params);
      this._rssItems = this.loadRss(this._region).subscribe((items) => {
        // console.log ('ITEMS',items)
        this.rssItems = items
        this.rssItems.forEach((item)=> items.checked = false);
      });
      // this.rssItems = this.loadRss(this._region)
    })
    // this.subscription = this._route.params.subscribe( (params) => {
    //   this._region = this.region.getRegion(params["region"]);
    //   this.rssItems =   this._rssService.getRss(this._region);
    //   this.rssItems.forEach((item)=> item.checked = false);
    // })
    
  }
  private loadRegion(params){
    // console.log (params)
    return this.region.getRegion(params);
  }

  private loadRss(region){
    // console.log ('loadRSS', this.rssService.getRss(region))
    return this.rssService.getRss(region);
  }

  ngOnDestroy(){
    // console.log ('Destroy', this._route);
    // this.subscription.unsubscribe();
  }
  
  rssDelete(item) {
    item.deleted= !item.deleted;
    this.rssUpdate.emit(item)
    console.log ('delete item ' + item.id);
  }

  rssUndelete(item) {
    item.deleted = !item.deleted;
    this.rssUpdate.emit(item)
   console.log ('undelete item ' + item.id);
  }

  rssEdit(item) {
    item.title = "CHANGED " + item.title;
    this.rssUpdate.emit(item);
    console.log ('edit item ' + item.id);
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

}
