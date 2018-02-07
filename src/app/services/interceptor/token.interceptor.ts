import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operator/map';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(public injector: Injector) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.injector.get(AuthService).getToken()}`
      }
    });

    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {

        }
      }),
      // catchError((err: HttpErrorResponse) => {
      //   if ((err.status === 400) || (err.status === 401)) {
      //     // return Observable.empty();
      //   } else {
      //     // return Observable.throw(err);
      //   }
      // })
    );
  }
}
