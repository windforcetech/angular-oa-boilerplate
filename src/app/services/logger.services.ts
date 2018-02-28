import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

export abstract class Logger {
  error: any;
  warn: any;
  info: any;
  debug: any;
  log: any;
}

const noop = (): any => undefined;
export let isDebugMode = environment.production;

@Injectable()
export class LoggerService implements Logger {
  error(message?: any, ...optionalParams: any[]) {
    return console.error.apply(console, arguments );
  }

  warn(message?: any, ...optionalParams: any[]) {
    return console.warn.apply(console, arguments );
  }

  info(message?: any, ...optionalParams: any[]) {
    return console.info.apply(console, arguments );
  }

  debug(message?: any, ...optionalParams: any[]) {
    return console.debug.apply(console, arguments );
  }

  log(message?: any, ...optionalParams: any[]) {
    return console.log.apply(console, arguments );
  }
}
