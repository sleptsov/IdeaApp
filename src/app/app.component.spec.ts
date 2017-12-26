import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { IdeaApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Platform } from 'ionic-angular';
import { PlatformMocks, StatusBarMock, SplashScreenMock } from '../../test-config/mocks-ionic';

let comp: IdeaApp;
let fixture: ComponentFixture<IdeaApp>;
let de: DebugElement;
let el: HTMLElement;

describe('Component: IdeaApp', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                IdeaApp
            ],
            providers: [
                { provide: Platform, useClass: PlatformMocks },
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock }
            ],
            imports: [
                IonicModule.forRoot(IdeaApp),
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IdeaApp);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        el = de.nativeElement;
    });

    afterEach(() => {
        fixture.destroy();
        comp = null;
        de = null;
        el = null;
    });

    it('is created', () => {
        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();

    });

});