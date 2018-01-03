import { TestBed } from '@angular/core/testing';
import { LoadingController, Loading } from 'ionic-angular';
import { LoadingService } from './loading.service'
import { LoadingControllerMocks } from '../../../test-config/mocks-ionic';

describe('LoadingService', () => {

    let loadingService: LoadingService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [
                LoadingService,
                { provide: LoadingController, useClass: LoadingControllerMocks }
            ]
        });

        loadingService = TestBed.get(LoadingService);

    });

    it(`should be created`, () => {
        expect(loadingService).toBeTruthy();
    });

});