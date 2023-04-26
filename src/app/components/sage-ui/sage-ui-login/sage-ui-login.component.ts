import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-sage-ui-login',
  templateUrl: './sage-ui-login.component.html',
  styleUrls: ['./sage-ui-login.component.less']
})
export class SageUiLoginComponent implements OnInit {
  // SignupForm: FormGroup;

  ngOnInit() {
    // this.SignupForm = new FormGroup({
    //   'userData': new FormGroup({
    //     'email': new FormControl(null, [Validators.required]),
    //     'password': new FormControl(null, [Validators.required, Validators.email])
    //   })
    // });

    // this.SignupForm.setValue({
    //   'userData': {
    //     'password': 'qyrus',
    //     'email': 'qyrus@gmail.com'
    //   }
    // })

  }

}
