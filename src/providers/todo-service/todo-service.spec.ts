import { TestBed } from '@angular/core/testing';
import { ToDoService, RestService } from '../../providers';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { API_END_POINT } from '../../config/config';

describe('ToDoService', () => {

    let toDoService: ToDoService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ToDoService, RestService]
        });

        toDoService = TestBed.get(ToDoService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it(`should be created`, () => {
        expect(toDoService).toBeTruthy();
    });

});