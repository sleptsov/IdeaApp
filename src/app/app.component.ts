import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TodoListPage } from '../pages/index';

@Component({
  templateUrl: 'app.html'
})
export class ToDoApp {
  rootPage: any = TodoListPage;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen
  ) {
    this.platformReady();
  }

  platformReady(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
