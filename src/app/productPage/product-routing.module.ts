import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductPageComponent } from './product.component';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { LoginPageComponent } from './loginPage/login.component';
import { CreateAccountWizardComponent } 
from './createAccountWizard/create-account-wizard.component';


const productPageRoutes: Routes = [
  { path: '', 
    component: ProductPageComponent,
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'signin',
        component: LoginPageComponent,
      },
      {
        path: 'signup',
        component: CreateAccountWizardComponent,
      },
      {
        path: 'createanaccount',
        component: CreateAccountWizardComponent,
      },
      {
        path: 'about',
        component: LandingPageComponent,
      },
      {
        path: '',
        component: LandingPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(productPageRoutes),
  ],
  exports: [
    RouterModule,
  ],
})

export class ProductPageRoutingModule {

}

