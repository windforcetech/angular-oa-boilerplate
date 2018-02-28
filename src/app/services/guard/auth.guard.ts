import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth.service';
import {LoggerService} from '../logger.services';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private logger: LoggerService,
              private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.authenticated) {
      return true;
    } else {
      this.router.navigate(['/']);
      this.logger.log('未授权');
      return false;
    }
  }
}
