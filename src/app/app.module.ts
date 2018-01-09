import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ToDoApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { IonicStorageModule } from '@ionic/storage'; // Temporary disabled.
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { config, dbconfig } from '../config/config';
import { RestService, ToDoService, HeaderInterceptor, LoadingService, SettingsService, ToastService } from '../providers/index';
import { TodoListPage, ModalPage } from '../pages/index';

@NgModule({
  declarations: [
    ToDoApp,
    TodoListPage,
    ModalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(ToDoApp, config, {
      links: [
        { component: TodoListPage, name: 'TodoListPage', segment: 'todo' }
      ]
    }),
    // IonicStorageModule.forRoot(dbconfig), // Temporary disabled.
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ToDoApp,
    TodoListPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestService,
    ToDoService,
    LoadingService,
    SettingsService,
    ToastService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true, }
  ]
})
export class AppModule { }
