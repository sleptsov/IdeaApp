import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PrioritizeTodoListPage } from './prioritize-todo-list'

let comp: PrioritizeTodoListPage;
let fixture: ComponentFixture<PrioritizeTodoListPage>;
let de: DebugElement;
let el: HTMLElement;

describe('Component: PrioritizeTodoListPage', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PrioritizeTodoListPage
            ],
            providers: [],
            imports: [
                IonicModule.forRoot(PrioritizeTodoListPage)
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PrioritizeTodoListPage);
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