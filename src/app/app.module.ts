import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ToDoApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { config, dbconfig } from '../config/config';
import { RestService, ToDoService, HeaderInterceptor } from '../providers';

@NgModule({
  declarations: [
    ToDoApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(ToDoApp, config),
    IonicStorageModule.forRoot(dbconfig),
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ToDoApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestService,
    ToDoService,
    {
      provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true,
    }
  ]
})
export class AppModule { }
