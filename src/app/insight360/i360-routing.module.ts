import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Insight360AppComponent } from './i360.component';
import { Insight360DashboardComponent } from './dashboard/i360-dashboard.component';
import { Insight360AuditListComponent } from './audit/i360-audit-list.component'; 

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
        component: Insight360AuditListComponent,
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

