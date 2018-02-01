import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Profile} from '../models/Profile';

@Injectable()
export class AuthService {
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
    return token !== '' && !!token;
  }

  get role(): string {
    return this.profile.role;
  }

  private setLoggedIn(value: boolean) {
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userinfo');
    this.setLoggedIn(false);
  }
}
