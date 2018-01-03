import { TestBed } from '@angular/core/testing';
import { ToastController, Toast } from 'ionic-angular';
import { ToastService } from './toast.service'
import { ToastControllerMocks } from '../../../test-config/mocks-ionic';

describe('ToastService', () => {

    let loadingService: ToastService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                ToastService,
                { provide: ToastController, useClass: ToastControllerMocks }
            ]
        });

        loadingService = TestBed.get(ToastService);

    });

    it(`should be created`, () => {
        expect(loadingService).toBeTruthy();
    });

});