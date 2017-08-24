import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from 'clarity-angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './productPage/product.component';
import { LoginPageComponent } from './loginPage/login.component';
import { CreateAccountWizardComponent } 
from './createAccountWizard/create-account-wizard.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ClarityModule.forRoot(),
  ],
  declarations: [
    AppComponent, 
    CreateAccountWizardComponent, 
    LoginPageComponent, 
    ProductPageComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {    }
