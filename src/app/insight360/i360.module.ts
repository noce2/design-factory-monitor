import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from 'clarity-angular';

import { DxCircularGaugeModule, 
  DxChartModule, 
} from 'devextreme-angular';

import { Insight360RoutingModule } from './i360-routing.module';

import { Insight360AppComponent } from './i360.component';
import { Insight360DashboardComponent } from './dashboard/i360-dashboard.component';
import { Insight360AuditListComponent } from './audit/i360-audit-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DxCircularGaugeModule,
    DxChartModule,
    Insight360RoutingModule,
    ClarityModule.forChild(),
  ],
  declarations: [
    Insight360AppComponent,
    Insight360DashboardComponent,
    Insight360AuditListComponent,
  ],
  exports: [

  ],
})

export class Insight360Module {

}

