import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from 'clarity-angular';

import { Insight360RoutingModule } from './insight360-routing.module';

import { Insight360AppComponent } from './insight360.component';
import { Insight360DashboardComponent } from './dashboard/insight360-dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Insight360RoutingModule,
    ClarityModule.forChild(),
  ],
  declarations: [
    Insight360AppComponent,
    Insight360DashboardComponent,
  ],
  exports: [

  ],
})

export class Insight360Module {

}

