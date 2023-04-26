import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


export var single = [
  {
    "name": "normal",
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
    "name": "context-word-substitute",
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
    "name": "inject-similar-word",
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
  },
  {
    "name": "word-swap",
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
    "name": "word-embedding-substitute",
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
  }
  ,
  {
    "name": "spelling-mistake",
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
  }
];

@Component({
  selector: 'app-intent-intent-report',
  templateUrl: './intent-intent-report.component.html',
  styleUrls: ['./intent-intent-report.component.less']
})
export class IntentIntentReportComponent implements OnInit {

  single: any;
  view: any = [715, 400];

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
