import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Insight360AppComponent } from './insight360.component';
import { Insight360DashboardComponent } from './dashboard/insight360-dashboard.component';

const insight360Routes: Routes = [
  { path: 'insight360', 
    component: Insight360AppComponent,
    children: [
      {
        path: 'dashboard',
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

