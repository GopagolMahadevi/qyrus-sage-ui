import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sage-ui-entity-test-runs',
  templateUrl: './sage-ui-entity-test-runs.component.html',
  styleUrls: ['./sage-ui-entity-test-runs.component.less']
})
export class SageUiEntityTestRunsComponent implements OnInit {

  selectedOption = '';

  constructor() { }

  ngOnInit(): void {
  }
  selectOption(option: string) {
    this.selectedOption = option.charAt(0).toUpperCase() + option.slice(1);
  }


}
