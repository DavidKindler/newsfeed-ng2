import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'rss-header',
  templateUrl: './header.component.html'
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   isLoggedIn:Boolean;
 
   constructor(
        private _authService: AuthService, 
        private _router: Router){
        }

  ngOnInit() {
      if (this._authService.isLoggedIn) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;       
      }
  }

  private logout(){
    this._authService.logout(null);
    this.isLoggedIn=false;
  }
  
  // onClick(){
  //   this._router.navigate(['','japan']);
  //   console.log ('clicked me.  Go to japan');
  // }
}
