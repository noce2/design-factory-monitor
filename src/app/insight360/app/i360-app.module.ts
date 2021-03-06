import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from 'clarity-angular';

import { DxCircularGaugeModule, 
  DxChartModule, 
} from 'devextreme-angular';

import { Insight360AppRoutingModule } from './i360-app-routing.module';

import { Insight360AppComponent } from './i360-app.component';
import { Insight360DashboardComponent } from './dashboard/i360-dashboard.component';
import { Insight360AuditComponent } from './audit/i360-audit.component';
import { Insight360AuditListComponent } from './audit/i360-audit-list.component';
import { Insight360CreateComponent } from './create/i360-create.component'; 
import { Insight360CreateListComponent } from './create/i360-create-list.component'; 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DxCircularGaugeModule,
    DxChartModule,
    Insight360AppRoutingModule,
    ClarityModule.forChild(),
  ],
  declarations: [
    Insight360AppComponent,
    Insight360DashboardComponent,
    Insight360AuditComponent,
    Insight360AuditListComponent,
    Insight360CreateComponent,
    Insight360CreateListComponent,
  ],
  exports: [

  ],
})

export class Insight360AppModule {

}

