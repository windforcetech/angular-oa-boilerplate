import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Profile} from 'selenium-webdriver/firefox';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  private authenticated: any;
  private profile: Profile;
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(private router: Router) {
    if (this.authenticated) {
      this.profile = JSON.parse(localStorage.getItem('profile'));
      this.setLoggedIn(true);
    } else {
      this.logout();
    }
  }

  get authenticated(): boolean {
    const token = localStorage.getItem('token');
    return token !== '';
  }

  private setLoggedIn(value: boolean) {
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  private logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userinfo');
    this.setLoggedIn(false);
  }
}
