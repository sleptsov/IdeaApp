import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TabsPage } from './tabs'

let comp: TabsPage;
let fixture: ComponentFixture<TabsPage>;
let de: DebugElement;
let el: HTMLElement;

describe('Component: TabsPage', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TabsPage
            ],
            providers: [],
            imports: [
                IonicModule.forRoot(TabsPage)
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TabsPage);
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