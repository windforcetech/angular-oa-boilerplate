import {Injectable} from '@angular/core';

@Injectable()
export class StorageServices {
  protected localStorage = localStorage;
  constructor() {}

  getItem(key: string) {

  }

  setItem(key: string, value: string) {
    this.localStorage.setItem(key, value);
  }

  removeItem(key: string) {

  }
}
