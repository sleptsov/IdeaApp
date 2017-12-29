import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { IonicModule, ModalController } from 'ionic-angular';
import { TodoListPage } from './todo-list';
import { Storage } from '@ionic/storage';
import { StorageMocks, ModalControllerMocks, AlertControllerMocks, MenuControllerMocks } from '../../../test-config/mocks-ionic';
import { LoadingService, ToDoService, SettingsService } from '../../providers/index';
import { LoadingServiceMocks, ToDoServiceMocks, SettingsServiceMock } from '../../../test-config/mocks-services';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { MenuController } from 'ionic-angular/components/app/menu-controller';

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
            providers: [
                { provide: Storage, useClass: StorageMocks },
                { provide: ModalController, useClass: ModalControllerMocks },
                { provide: LoadingService, useClass: LoadingServiceMocks },
                { provide: ToDoService, useClass: ToDoServiceMocks },
                { provide: SettingsService, useClass: SettingsServiceMock },
                { provide: AlertController, useClass: AlertControllerMocks },
                { provide: MenuController, useClass: MenuControllerMocks }
            ],
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