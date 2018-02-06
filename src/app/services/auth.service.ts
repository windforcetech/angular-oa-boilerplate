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
    this.profile = JSON.parse(this.localStorageService.getItem('userInfo'));
    if (this.profile && this.profile.role) {
      return this.profile.role;
    }
    return undefined;
  }

  private setLoggedIn(value: boolean) {
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  logout() {
    this.localStorageService.removeItem('token');
    this.localStorageService.removeItem('userInfo');
    this.setLoggedIn(false);
  }
}
