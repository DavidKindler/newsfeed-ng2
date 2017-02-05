import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'rss-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  // form = new FormGroup({
  //   email: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required)
  // });
  constructor(
    private _authService: AuthService, 
    private _router: Router){
  }

  onLogin(e){
    console.log ('on submit=>', e);
    let username = 'test';
    let password = 'test';
    this._authService.login(username,password);
    this._router.navigate(['']);
  }

  log(p){
    console.log ('form param', p);
  }
}

