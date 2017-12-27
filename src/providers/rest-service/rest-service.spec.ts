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

    it(`should issue a GET request`, () => {
        restService.fetch(`https://google.com`).subscribe();
        httpMock.expectOne({
            url: `https://google.com`,
            method: 'GET'
        });
    });

    it(`should issue a POST request`, () => {
        restService.post(`https://google.com`, null).subscribe();
        httpMock.expectOne({
            url: `https://google.com`,
            method: 'POST'
        });
    });

    it(`should issue a PUT request`, () => {
        restService.put(`https://google.com`, null).subscribe();
        httpMock.expectOne({
            url: `https://google.com`,
            method: 'PUT'
        });
    });

    it(`should issue a DELETE request`, () => {
        restService.delete(`https://google.com`).subscribe();
        httpMock.expectOne({
            url: `https://google.com`,
            method: 'DELETE'
        });
    });

    it(`should NOT fail when sending an un-matched request`, () => {
        restService.fetch(`https://google.com/foo`).subscribe();
        httpMock.match(`https://google.com`);
    });
});