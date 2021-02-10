import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule.forRoot({ 
      version: '49',
      mapsApiKey: 'AIzaSyBHKoUVV_z5rDn8Yc1QwjkFeZ9SbeC6ooM'
     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
