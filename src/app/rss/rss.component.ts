import { Component, OnInit, EventEmitter, Input, Output, OnDestroy  } from '@angular/core';
import { RSSService} from '../rss.service';
import { RegionService } from '../region.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: '.rss-list',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css'],
  providers: [RegionService, RSSService]
})
export class RssComponent  implements OnInit, OnDestroy {
  private _region: Object;
  subscription;

  @Input() rssItems: any[];
  // rssItems;
  @Output() rssUpdate = new EventEmitter();
  @Output() checkAllEvent = new EventEmitter();

  constructor( 
    private region: RegionService, 
    private rss: RSSService, 
    private _route: ActivatedRoute, 
    private _router: Router
    ) {
   
    }

  ngOnInit() {
   
    this.subscription = this._route.params.subscribe( (params) => {
      this._region = this.region.getRegion(params["region"]);
      this.rssItems = this.rss.getRss(this._region);
      this.rssItems.forEach((item)=> item.checked = false);
    })
    
  }

  ngOnDestroy(){
    console.log ('Destroy', this._route);
    this.subscription.unsubscribe();
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
}
