import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from "clarity-angular";

import { AppComponent } from "./app.component";
import { CreateAccountWizardComponent } from "./createAccountWizard/create-account-wizard.component";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot()
    ],
     declarations: [ AppComponent, CreateAccountWizardComponent ],
     bootstrap: [ AppComponent ]
})
export class AppModule {    }