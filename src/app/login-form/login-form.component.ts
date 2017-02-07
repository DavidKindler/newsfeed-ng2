import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService} from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rss-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit{
  // form = new FormGroup({
  //   email: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required)
  // });
  returnUrl: string;
  constructor(
    private _authService: AuthService, 
    private _router: Router,
    private _route: ActivatedRoute ) {  }

  ngOnInit(){
     this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
     console.log ('RETURNURL', this.returnUrl)
  }

  onLogin(e){
    console.log ('on submit=>', e);
    let username = 'test';
    let password = 'test';
    this._authService.login(username,password);
    this._router.navigate([this.returnUrl]);
  }

  log(p){
    console.log ('form param', p);
  }
}

