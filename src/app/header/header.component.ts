import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'rss-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private _router: Router) {
  }

  ngOnInit() {
  }
  
  // onClick(){
  //   this._router.navigate(['','japan']);
  //   console.log ('clicked me.  Go to japan');
  // }
}
