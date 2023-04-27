import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intent-edit-test-case',
  templateUrl: './sage-ui-intent-edit-test-case.component.html',
  styleUrls: ['./sage-ui-intent-edit-test-case.component.less']
})
export class IntentEditTestCaseComponent implements OnInit {
  stepsContent: number = 1;

  activePopover: string = "";
  showOverlay: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showContent(contentNumber: number) {
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

}
