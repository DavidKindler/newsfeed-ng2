import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SignupValidators } from './username-validators';


@Component({
  selector: 'rss-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent  {
  form: FormGroup;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      email: ['', Validators.compose([
        Validators.required,
        SignupValidators.cannotContainSpace,
        SignupValidators.emailInvalid
      ]), SignupValidators.shouldBeUnique],
      password: ['', Validators.compose([
        Validators.required,
        SignupValidators.cannotContainSpace
      ])]
    });
  }
  // form = new FormGroup({
  //   username: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required)
  // });

  onSignup() {
    //var result = authService.login(this.form.value);  // For signin
    // this.form.get('email').setErrors({
    //   invalidLogin: true
    // });
    console.log ('form.value',this.form.value);
    console.log ('form.get(email)',this.form.get('email'));

  }

}
