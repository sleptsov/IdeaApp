import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ModalPage } from './modal';
import { NavParamsMocks, ViewControllerMocks } from '../../../test-config/mocks-ionic';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { MockTodos } from '../../../test-config/mocks-data';

let comp: ModalPage;
let fixture: ComponentFixture<ModalPage>;
let de: DebugElement;
let el: HTMLElement;

describe('Component: ModalPage', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ModalPage
            ],
            providers: [
                { provide: NavParams, useClass: NavParamsMocks },
                { provide: ViewController, useClass: ViewControllerMocks }
            ],
            imports: [
                IonicModule.forRoot(ModalPage)
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ModalPage);
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