import {Injectable} from '@angular/core';

@Injectable()
export class StorageServices {
  protected localStorage = localStorage;
  constructor() {}

  getItem(key: string) {
    return this.localStorage.getItem(key);
  }

  setItem(key: string, value: string) {
    this.localStorage.setItem(key, value);
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
  }

  clear() {
    this.localStorage.clear();
  }
}
