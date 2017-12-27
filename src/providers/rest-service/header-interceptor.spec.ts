import { TestBed } from '@angular/core/testing';
import { HeaderInterceptor } from '../../providers/rest-service/header-interceptor';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeaderInterceptor', () => {

    let headerInterceptor: HeaderInterceptor;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HeaderInterceptor]
        });

        headerInterceptor = TestBed.get(HeaderInterceptor);
    });

    it(`should be created`, () => {
        expect(headerInterceptor).toBeTruthy();
    });
});