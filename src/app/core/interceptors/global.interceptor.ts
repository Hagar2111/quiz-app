import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl: string = 'https://upskilling-egypt.com:3005/api/';
    const token = localStorage.getItem('token');
    let x = request.clone({
      url:baseUrl+request.url,
      setHeaders: {
        'Authorization':`Bearer ${token}`,
      //  'language':`${lang}`
      }
    })
    return next.handle(x);
  }
}
