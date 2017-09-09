import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from 'clarity-angular';

import { AppRoutingModule } from './app-routing.module';
import { ProductPageModule } from './productPage/product.module';
import { Insight360Module } from './insight360/i360.module';

import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './pageNotFound/page-not-found.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule, 
    Insight360Module,
    ProductPageModule,
    AppRoutingModule,// this must be after all modules containing routes
    ClarityModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {    }
