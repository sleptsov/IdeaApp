import { TestBed } from '@angular/core/testing';
import { RestService } from '../../providers/rest-service/rest-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { API_END_POINT } from '../../config/config';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('RestService', () => {

    let restService: RestService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, HttpClientTestingModule],
            providers: [RestService]
        });

        restService = TestBed.get(RestService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it(`should be created`, () => {
        expect(restService).toBeTruthy();
    });
});