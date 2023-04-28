import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sage-ui-login',
  templateUrl: './sage-ui-login.component.html',
  styleUrls: ['./sage-ui-login.component.less']
})
export class SageUiLoginComponent implements OnInit {

  signupForm: FormGroup;
  emailValidation: string;
  passwordValidation: string;

  constructor(

  ) {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    })

  }

  ngOnInit() {

  };

  // this.SignupForm.setValue({
  //   'userData': {
  //     'password': 'qyrus',
  //     'email': 'qyrus@gmail.com'
  //   }
  // })

  login() {
    const props = Object.keys(this.signupForm.value)
    this.emailValidation = null;
    this.passwordValidation = null;
    props.forEach((prop) => {
      if ((!this.emailValidation || !this.passwordValidation) && this.signupForm.get(prop)?.errors) {
        if (prop == "email") {
          this.emailValidation = prop
        }
        if (prop == "password") {
          this.passwordValidation = prop
        }
      }
    })
  }

}
