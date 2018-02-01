import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Profile} from '../models/Profile';
import {StorageServices} from './storage.service';

@Injectable()
export class AuthService {
  private profile: Profile;
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(private router: Router, private localStorageService: StorageServices) {
    if (this.authenticated) {
      this.profile = JSON.parse(localStorage.getItem('profile'));
      this.setLoggedIn(true);
    } else {
      this.logout();
    }
  }

  get authenticated(): boolean {
    const token = this.localStorageService.getItem('token');
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
    this.localStorageService.removeItem('token');
    this.localStorageService.removeItem('userinfo');
    this.setLoggedIn(false);
  }
}
