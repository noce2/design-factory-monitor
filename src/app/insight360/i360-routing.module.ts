import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Insight360AppComponent } from './i360.component';
import { Insight360DashboardComponent } from './dashboard/i360-dashboard.component';
import { Insight360AuditComponent } from './audit/i360-audit.component'; 
import { Insight360CreateComponent } from './create/i360-create.component'; 

const insight360Routes: Routes = [
  { path: 'insight360', 
    component: Insight360AppComponent,
    children: [
      {
        path: 'dashboard',
        component: Insight360DashboardComponent,
      },
      {
        path: 'audit',
        component: Insight360AuditComponent,
      },
      {
        path: 'create',
        component: Insight360CreateComponent,
      },
      {
        path: '',
        component: Insight360DashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(insight360Routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class Insight360RoutingModule {

}

