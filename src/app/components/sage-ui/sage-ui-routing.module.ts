import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SageUiLoginComponent } from './sage-ui-login/sage-ui-login.component';
import { SageUiDashboardComponent } from './sage-ui-dashboard/sage-ui-dashboard.component';
import { SageUiNavbarComponent } from './sage-ui-common/sage-ui-navbar/sage-ui-navbar.component';
import { IntentTestingComponent } from './sage-ui-intent-testing/sage-ui-intent-testing/sage-ui-intent-testing.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: '', redirectTo: '/login', pathMatch: 'full'
      },
      {
        path: 'login', component: SageUiLoginComponent

      },
      {
        path: 'home', component: SageUiDashboardComponent
      },
      {
        path: 'navbar', component: SageUiNavbarComponent
      },
      {
        path: 'intent-testing', component: IntentTestingComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SageUiRoutingModule { }
