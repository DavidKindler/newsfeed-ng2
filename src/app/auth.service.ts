import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoggedIn = true;
  // isLoggedIn = false;

  login(username, password){
      this.isLoggedIn = true;    
      console.log ('now logged in')
  }

  logout(username){
      this.isLoggedIn = false;
      console.log ('now logged out')
  }
  constructor() { }

}
