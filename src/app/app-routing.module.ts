import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';

const appRoutes: Routes = [
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
