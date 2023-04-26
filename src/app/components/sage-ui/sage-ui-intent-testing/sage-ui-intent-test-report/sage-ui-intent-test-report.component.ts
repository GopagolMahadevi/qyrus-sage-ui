import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


export var single = [
  {
    "name": "airport.map",
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
    "name": "flight.book",
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
    "name": "flight.checkin.online",
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
  selector: 'app-intent-test-report',
  templateUrl: './sage-ui-intent-test-report.component.html',
  styleUrls: ['./sage-ui-intent-test-report.component.less']
})
export class IntentTestReportComponent implements OnInit {

  single: any;
  view: any = [700, 350];

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
