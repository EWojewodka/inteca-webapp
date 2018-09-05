import { BrowserModule } from '@angular/platform-browser';
import {ApiConnector} from './api-connector.service';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ApiConnector
  ]
})
export class ApiModule { }
