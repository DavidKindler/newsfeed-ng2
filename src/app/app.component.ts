import { Component } from '@angular/core';
import { RegionService } from './region.service';
import { RSSService} from './rss.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RegionService, RSSService]
})
export class AppComponent {
  private region: Object;
  private rss: any[];

  constructor(region: RegionService, rss: RSSService){
    this.region = region.getRegion();
    this.rss = rss.getRss();
  }
  onRssUpdate(item){
    console.log (item);
    // item.deleted = !item.deleted;
  }
  checkAll($event){
    console.log ('check/uncheck all items');
    // console.log ($event.target.checked);
    this.rss.forEach(function(item){    
      return item.checked = $event.target.checked;
    })
    console.log (this.rss)
  }
}
