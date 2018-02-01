import {Injectable} from '@angular/core';

@Injectable()
export class StorageServices {
  protected localStorage = localStorage;
  constructor() {}

  getItem(key: string) {

  }

  setItem(key: string, value: object) {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string) {

  }
}
