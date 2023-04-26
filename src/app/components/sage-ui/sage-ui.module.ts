import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SageUiRoutingModule } from './sage-ui-routing.module';
import { SageUiComponent } from './sage-ui.component';
import { SageUiDashboardComponent } from './sage-ui-dashboard/sage-ui-dashboard.component';
import { SageUiLoginComponent } from './sage-ui-login/sage-ui-login.component';
import { SageUiNavbarComponent } from './sage-ui-common/sage-ui-navbar/sage-ui-navbar.component';
import { IntentTestingComponent } from './sage-ui-intent-testing/sage-ui-intent-testing/sage-ui-intent-testing.component';
import { MainComponent } from './main/main.component';
import { SageUiIntentTestRunsComponent } from './sage-ui-intent-testing/sage-ui-intent-test-runs/sage-ui-intent-test-runs.component';
import { IntentTestReportComponent } from './sage-ui-intent-testing/sage-ui-intent-test-report/sage-ui-intent-test-report.component';
import { IntentIntentReportComponent } from './sage-ui-intent-testing/sage-ui-intent-intent-report/sage-ui-intent-intent-report.component';
import { EntityTestingComponent } from './sage-ui-entity-testing/sage-ui-entity-testing/sage-ui-entity-testing.component';
import { EntityTestScriptComponent } from './sage-ui-entity-testing/sage-ui-entity-test-script/sage-ui-entity-test-script.component';
import { EntityTestResultsComponent } from './sage-ui-entity-testing/sage-ui-entity-test-results/sage-ui-entity-test-results.component';
import { IntentSuccessTestCaseComponent } from './sage-ui-intent-testing/sage-ui-intent-success-test-case/sage-ui-intent-success-test-case.component';
import { IntentEditTestCaseComponent } from './sage-ui-intent-testing/sage-ui-intent-edit-test-case/sage-ui-intent-edit-test-case.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [

    SageUiComponent,
    SageUiDashboardComponent,
    SageUiLoginComponent,
    SageUiNavbarComponent,
    IntentTestingComponent,
    MainComponent,
    SageUiIntentTestRunsComponent,
    IntentTestReportComponent,
    IntentIntentReportComponent,
    EntityTestingComponent,
    EntityTestScriptComponent,
    EntityTestResultsComponent,
    IntentSuccessTestCaseComponent,
    IntentEditTestCaseComponent,


  ],
  imports: [
    CommonModule,
    SageUiRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class SageUiModule { }
