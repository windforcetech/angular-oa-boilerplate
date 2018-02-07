import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(public injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.injector.get(AuthService).getToken()}`
      }
    });

    return next.handle(request);
  }
}
