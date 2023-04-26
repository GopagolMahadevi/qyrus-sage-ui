import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sage-ui-intent-test-runs',
  templateUrl: './sage-ui-intent-test-runs.component.html',
  styleUrls: ['./sage-ui-intent-test-runs.component.less']
})
export class SageUiIntentTestRunsComponent implements OnInit {
  selectedOption = '';

  constructor() { }

  ngOnInit(): void {
  }
  selectOption(option: string) {
    this.selectedOption = option.charAt(0).toUpperCase() + option.slice(1);
  }

}
