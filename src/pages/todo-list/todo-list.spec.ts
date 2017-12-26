import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TodoListPage } from './todo-list'

let comp: TodoListPage;
let fixture: ComponentFixture<TodoListPage>;
let de: DebugElement;
let el: HTMLElement;

describe('Component: TodoListPage', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TodoListPage
            ],
            providers: [],
            imports: [
                IonicModule.forRoot(TodoListPage)
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListPage);
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