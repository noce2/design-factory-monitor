import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from 'clarity-angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPageComponent } from './product.component';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { LoginPageComponent } from './loginPage/login.component';
import { CreateAccountWizardComponent } 
from './createAccountWizard/create-account-wizard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductPageRoutingModule,
    ClarityModule.forChild(),
  ],
  declarations: [
    ProductPageComponent,
    LoginPageComponent,
    CreateAccountWizardComponent,
    LandingPageComponent,
  ],
  exports: [

  ],
})

export class ProductPageModule {

}

