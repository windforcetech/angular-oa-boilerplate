import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import 'rxjs/add/operator/map';
import {map} from 'rxjs/operator/map';
import {of} from 'rxjs/observable/of';
import {Router} from '@angular/router';

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
      catchError(this.handleError<any>())
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      if ((error.status === 400) || (error.status === 401)) {
        alert(JSON.stringify(error));
        this.injector.get(Router).navigate(['/']);
      } else {
        alert(JSON.stringify(error));
        return Observable.throw(error);
      }

      return of(result as T);
    };

  }
}
