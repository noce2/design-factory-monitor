import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ClarityModule } from 'clarity-angular';

import { Insight360Component } from './i360.component';
import { Insight360LoadingComponent } from './loading/i360-loading.component';

const i360ModuleRoots: Routes = [
  
  { path: 'insight360', 
    component: Insight360Component, 
    children: [
      { path: '', component: Insight360LoadingComponent },
      // the Insight360App Module is loaded this way to allow lazy-loading
      { path: 'app', loadChildren: './app/i360-app.module#Insight360AppModule' },
    ],
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(i360ModuleRoots),
    ClarityModule.forChild(),
  ],
  declarations: [
    Insight360Component,
    Insight360LoadingComponent,
  ],
  exports: [
    RouterModule,
  ],
})

export class Insight360Module {

}
