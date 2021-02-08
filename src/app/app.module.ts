import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';
import {keys } from './keys/keys';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule.forRoot({ 
      version: '49',
      mapsApiKey: keys.gmapApiKey
     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
