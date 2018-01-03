import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authReq = req.clone({
            setHeaders: {
                'Content-Type': 'application/json'
            },
            //url: req.url.replace('http://', 'https://')
        });

        return next.handle(authReq);
    }
}

