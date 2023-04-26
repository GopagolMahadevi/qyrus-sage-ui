import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


export var single = [
  {
    "name": "cuisine",
    "series": [
      {
        "name": "Accuracy",
        "value": 70
      },
      {
        "name": "Fails",
        "value": 25
      }
    ]
  },
  {
    "name": "location",
    "series": [
      {
        "name": "Accuracy",
        "value": 100

      },
      {
        "name": "Fails",
        "value": 10

      }
    ]
  },
  {
    "name": "stars",
    "series": [
      {
        "name": "Accuracy",
        "value": 85
      },
      {
        "name": "Fails",
        "value": 15
      }
    ]
  }
];


@Component({
  selector: 'app-entity-test-results',
  templateUrl: './sage-ui-entity-test-results.component.html',
  styleUrls: ['./sage-ui-entity-test-results.component.less']
})
export class EntityTestResultsComponent implements OnInit {

  single: any;
  view: any = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = '';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = '';
  doughnut = true;
  // margin: number[] = [0, 25, 50, 75, 100];

  colorScheme: any = {
    domain: ['#28A138', '#E4463C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { single });

  }
  ngOnInit(): void {

  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
