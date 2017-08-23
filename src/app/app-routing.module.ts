import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductPageComponent } from './productPage/product.component';
import { LoginPageComponent } from './loginPage/login.component';
import { CreateAccountWizardComponent } 
from './createAccountWizard/create-account-wizard.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: CreateAccountWizardComponent },
  { path: 'createanaccount', component: CreateAccountWizardComponent },
  { path: '', component: ProductPageComponent },
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
