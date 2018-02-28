import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

export abstract class Logger {
  off: any;
  error: any;
  warn: any;
  info: any;
  debug: any;
  all: any;
}

const noop = (): any => undefined;
export let isDebugMode = environment.production;

@Injectable()
export class LoggerService implements Logger {
  get off() {
    return noop;
  }

  get error() {
    return noop;
  }

  get warn() {
    return noop;
  }

  get info() {
    return noop;
  }

  get debug() {
    return noop;
  }

  get all() {
    return noop;
  }
}
