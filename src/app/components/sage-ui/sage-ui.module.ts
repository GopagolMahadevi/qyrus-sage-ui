import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SageUiRoutingModule } from './sage-ui-routing.module';
import { SageUiComponent } from './sage-ui.component';
import { SageUiDashboardComponent } from './sage-ui-dashboard/sage-ui-dashboard.component';
import { SageUiLoginComponent } from './sage-ui-login/sage-ui-login.component';
import { SageUiNavbarComponent } from './sage-ui-common/sage-ui-navbar/sage-ui-navbar.component';
import { IntentTestingComponent } from './sage-ui-shared/sage-ui-intent-testing/intent-testing/intent-testing.component';
import { MainComponent } from './main/main.component';
import { SageUiIntentTestRunsComponent } from './sage-ui-shared/sage-ui-intent-testing/sage-ui-intent-test-runs/sage-ui-intent-test-runs.component';
import { IntentTestReportComponent } from './sage-ui-shared/sage-ui-intent-testing/intent-test-report/intent-test-report.component';
import { IntentIntentReportComponent } from './sage-ui-shared/sage-ui-intent-testing/intent-intent-report/intent-intent-report.component';
import { EntityTestingComponent } from './sage-ui-shared/sage-ui-entity-testing/entity-testing/entity-testing.component';
import { EntityTestScriptComponent } from './sage-ui-shared/sage-ui-entity-testing/entity-test-script/entity-test-script.component';
import { EntityTestResultsComponent } from './sage-ui-shared/sage-ui-entity-testing/entity-test-results/entity-test-results.component';
import { IntentSuccessTestCaseComponent } from './sage-ui-shared/sage-ui-intent-testing/intent-success-test-case/intent-success-test-case.component';
import { IntentEditTestCaseComponent } from './sage-ui-shared/sage-ui-intent-testing/intent-edit-test-case/intent-edit-test-case.component';
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
