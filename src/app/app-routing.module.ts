import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';

const appRoutes: Routes = [
  // the insight360 Module is loaded this way to allow lazy-loading
  { path: 'insight360', loadChildren: './insight360/i360.module#Insight360Module' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, // <- remove when prod ready
    ),
  ],
  exports: [
    RouterModule,
  ],
})

export class AppRoutingModule {

}
