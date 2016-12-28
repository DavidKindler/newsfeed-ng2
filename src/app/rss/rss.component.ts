import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { RSSService} from '../rss.service';

@Component({
  selector: '[rss-list]',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css'],
  providers: [RSSService]
})
export class RssComponent  {
  rss: any[];
  @Output() rssUpdate = new EventEmitter();

  constructor(rss: RSSService){
    this.rss = rss.getRss();
    this.rss.forEach(function(item){
      return item.checked = false;
    })
  }

  rssDelete(item) {
    item.deleted= !item.deleted;
    this.rssUpdate.emit(item)
    // alert ('delete item ' + item.id);
  }

  rssUndelete(item) {
    item.deleted = !item.deleted;
    this.rssUpdate.emit(item)
    // alert('undelete item ' + item.id);
  }

  rssEdit(item) {
    item.title = "CHANGED " + item.title;
    this.rssUpdate.emit(item);
    // alert('edit item ' + item.id);
  }


}
