import { TestBed } from '@angular/core/testing';
import { SettingsService } from '../../providers';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { API_END_POINT } from '../../config/config';
import { Platform } from 'ionic-angular';
import { PlatformMocks } from '../../../test-config/mocks-ionic';

describe('SettingsService', () => {

    let settingsService: SettingsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: Platform, useClass: PlatformMocks },
                SettingsService
            ]
        });

        settingsService = TestBed.get(SettingsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it(`should be created`, () => {
        expect(settingsService).toBeTruthy();
    });

});