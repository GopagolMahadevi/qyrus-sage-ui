import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-intent-edit-test-case',
  templateUrl: './sage-ui-intent-edit-test-case.component.html',
  styleUrls: ['./sage-ui-intent-edit-test-case.component.less']
})
export class IntentEditTestCaseComponent implements OnInit {
  stepsContent: number = 1;

  editTestStep1Form: FormGroup;
  editTestStep2Form1: FormGroup;
  editTestStep2Form2: FormGroup;
  editTestStep2Form3: FormGroup;
  editTestStep3Form: FormGroup;
  editTestStep4Form: FormGroup;
  enableRunBtn: boolean = false;
  formCompleted: boolean = false;

  validationMessage: Set<string> = new Set([]);
  currentFormIndex: number = 0;
  totalForms: number = 6;


  activePopover: string = "";
  showOverlay: boolean = false;
  constructor() {
    this.editTestStep1Form = new FormGroup({
      'testName': new FormControl(null, [Validators.required]),
      'testDesc': new FormControl(null, [Validators.required])
    })

    this.editTestStep2Form1 = new FormGroup({
      'projectId': new FormControl(null, [Validators.required]),
      'file': new FormControl(null, [Validators.required]),
      'authCode': new FormControl(null, [Validators.required])
    })

    this.editTestStep2Form2 = new FormGroup({
      'serverToken': new FormControl(null, [Validators.required])
    })

    this.editTestStep2Form3 = new FormGroup({
      'accessKey': new FormControl(null, [Validators.required]),
      'secretKey': new FormControl(null, [Validators.required]),
      'botName': new FormControl(null, [Validators.required]),
      'botAlias': new FormControl(null, [Validators.required]),
      'botRegion': new FormControl(null, [Validators.required])
    })
    this.editTestStep3Form = new FormGroup({
      'file1': new FormControl(null, [Validators.required])
    })

  }

  ngOnInit(): void {
  }

  showContent(contentNumber: number) {
    console.log(contentNumber)
    this.stepsContent = contentNumber;
  }


  showPopover(popoverName: string) {
    this.activePopover = popoverName;
    this.showOverlay = true;
  }

  closePopover() {
    this.activePopover = "";
    this.showOverlay = false;
  }


  saveNext(formNumber: number) {
    let fieldError = false;
    if (formNumber === 1) {
      const props = Object.keys(this.editTestStep1Form.value)
      this.validationMessage.clear();
      props
        .forEach((prop) => {
          if (this.editTestStep1Form.get(prop)?.errors) {
            this.validationMessage.add(prop);
            fieldError = true
          }
        })

      if (!fieldError) {
        this.showContent(2)
      }
    }
    if (formNumber === 2) {
      const props = Object.keys(this.editTestStep2Form1.value)
      this.validationMessage.clear();
      props
        .forEach((prop) => {
          if (this.editTestStep2Form1.get(prop)?.errors) {
            this.validationMessage.add(prop);
            fieldError = true;
          }
        })
      if (!fieldError) {
        this.showContent(3)
      }
    }
    if (formNumber === 3) {
      const props = Object.keys(this.editTestStep2Form2.value)
      this.validationMessage.clear();
      props
        .forEach((prop) => {
          if (this.editTestStep2Form2.get(prop)?.errors) {
            this.validationMessage.add(prop);
            fieldError = true;
          }
        })

      if (!fieldError) {
        this.showContent(4)
      }

    }
    if (formNumber === 4) {
      const props = Object.keys(this.editTestStep2Form3.value)
      this.validationMessage.clear();
      props
        .forEach((prop) => {
          if (this.editTestStep2Form3.get(prop)?.errors) {
            this.validationMessage.add(prop);
            fieldError = true
          }
        })
      if (!fieldError) {
        this.showContent(5)
      }
    }
    if (formNumber === 5) {
      const props = Object.keys(this.editTestStep3Form.value)
      this.validationMessage.clear();
      props
        .forEach((prop) => {
          if (this.editTestStep3Form.get(prop)?.errors) {
            this.validationMessage.add(prop);
            fieldError = true;
          }
        })
      if (!fieldError) {
        this.showContent(6)
        this.enableRunBtn = true;
      }
    }



  }


  runBtn(value: number) {
    this.showContent(value);
    this.enableRunBtn = false;
    this.formCompleted = true;
  }

  previous(formNo: number) {
    if (this.stepsContent >= 2) {

      this.showContent(this.stepsContent - 1);
    }
  }
}
