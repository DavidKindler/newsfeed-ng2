import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  onRssUpdate2(item){
    console.log ('appComponent onRssUpdate2',item);
    // item.deleted = !item.deleted;
  }
  

  
}
