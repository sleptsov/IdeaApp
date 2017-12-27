import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModalController, Slides, LoadingController, AlertController, NavController, NavParams, NavOptions, ViewController, MenuController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Page, TransitionDoneFn } from 'ionic-angular/navigation/nav-util';
import { ComponentRef, EventEmitter, Renderer, ElementRef } from '@angular/core';
import { Content, Header, Footer, Navbar } from 'ionic-angular/navigation/nav-interfaces';

export class PlatformMocks {
  public ready(): Promise<{ String }> {
    return new Promise((resolve) => {
      resolve();
    });
  }

  public getQueryParam() {
    return true;
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return (() => true);
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    return (() => true);
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document['activeElement'];
  }
}

export class StatusBarMock {
  styleDefault() {
    return;
  }
}

export class SplashScreenMock {
  hide() {
    return;
  }
}


export class StorageMocks {

  driver: string = '';

  ready(): Promise<any> {
    return new Promise((resolve) => {
      resolve({});
    });
  }
  remove(key: any): Promise<any> {
    return new Promise((resolve) => {
      resolve();
    });
  }
  get(key: any): Promise<any> {
    return new Promise((resolve) => {
      resolve(key);
    });
  }

  set(key: any, value: any): Promise<any> {
    return new Promise((resolve) => {
      resolve();
    });
  }

  clear(): Promise<any> {
    return new Promise((resolve) => {
      resolve();
    });
  }

  length(): Promise<any> {
    return new Promise((resolve) => {
      resolve(1);
    });
  }

  keys(): Promise<any> {
    return new Promise((resolve) => {
      resolve([]);
    });
  }

  forEach(iteratorCallback: any): Promise<any> {
    return new Promise((resolve) => {
      resolve();
    });
  }


}

export class ModalControllerMocks {

}

export class LoadingControllerMocks {

}

export class AlertControllerMocks {

}

export class NavControllerMocks {
  push(page: string | Page, params?: any, opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
    return;
  }
  insert(insertIndex: number, page: string | Page, params?: any, opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
    return;
  }
  insertPages(insertIndex: number, insertPages: { page: string | Page; params?: any; }[], opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
    return;
  }
  pop(opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
    return;
  }
  popToRoot(opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
    return;
  }
  popTo(page: string | Page | ViewController, opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
    return;
  }
  popAll(): Promise<any[]> {
    return;
  }
  remove(startIndex: number, removeCount?: number, opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
    return;
  }
  removeView(viewController: ViewController, opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
    return;
  }
  setRoot(pageOrViewCtrl: string | Page | ViewController, params?: any, opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
    return;
  }
  goToRoot(options: NavOptions): Promise<any> {
    return;
  }
  setPages(pages: (ViewController | { page: string | Page; params?: any; })[], opts?: NavOptions, done?: TransitionDoneFn): Promise<any> {
    return;
  }
  getByIndex(index: number): ViewController {
    return;
  }
  getActive(includeEntering?: boolean): ViewController {
    return;
  }
  isActive(view: ViewController): boolean {
    return;
  }
  getPrevious(view?: ViewController): ViewController {
    return;
  }
  first(): ViewController {
    return;
  }
  last(): ViewController {
    return;
  }
  indexOf(view: ViewController): number {
    return;
  }
  length(): number {
    return;
  }
  getViews(): ViewController[] {
    return;
  }
  getActiveChildNavs(): any[] {
    return;
  }
  getActiveChildNav() {
    return;
  }
  getAllChildNavs(): any[] {
    return;
  }
  isTransitioning(includeAncestors?: boolean): boolean {
    return;
  }
  canSwipeBack(): boolean {
    return;
  }
  canGoBack(): boolean {
    return;
  }
  registerChildNav(nav: any): void {
    return;
  }
  resize(): void {
    return;
  }
  getType(): string {
    return;
  }
  getSecondaryIdentifier(): string {
    return;
  }

}

export class NavParamsMocks {

  data: any;

  get(param: string): any {
    return;
  }
}

export class MenuControllerMocks extends MenuController {

}

export class EventsMocks extends Events {

}

export class SlidesMocks extends Slides {

}

export class ViewControllerMocks {
  public readReady: any = {
    emit(): void {

    },
    subscribe(): any {

    }
  };

  public writeReady: any = {
    emit(): void {

    },
    subscribe(): any {

    }
  };

  public contentRef(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public didEnter(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public didLeave(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public onDidDismiss(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public onWillDismiss(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public willEnter(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public willLeave(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public willUnload(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public dismiss(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public enableBack(): any {
    return true;
  }

  public getContent(): any {
    return true;
  }

  public hasNavbar(): any {
    return true;
  }

  public index(): any {
    return true;
  }

  public isFirst(): any {
    return true;
  }

  public isLast(): any {
    return true;
  }

  public pageRef(): any {
    return true;
  }

  public setBackButtonText(): any {
    return true;
  }

  public showBackButton(): any {
    return true;
  }

  public _setHeader(): any {
    return true;
  }

  public _setIONContent(): any {
    return true;
  }

  public _setIONContentRef(): any {
    return true;
  }

  public _setNavbar(): any {
    return true;
  }

  public _setContent(): any {
    return true;
  }

  public _setContentRef(): any {
    return true;
  }

  public _setFooter(): any {
    return true;
  }
}

export class GooglePlusMocks {

}

export class FacebookMocks {

}

export class CameraMocks {

}