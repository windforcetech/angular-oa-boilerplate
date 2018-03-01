import {LoggerService} from './logger.services';
import {Injectable} from '@angular/core';

function appendToStorage(name, data) {
  let old = localStorage.getItem(name);
  if (old === null) {
    old = '';
  } else {
    old = old + ',';
  }
  localStorage.setItem(name, old + data);
}

@Injectable()
export class AnalyticsService {
  private logger: LoggerService = new LoggerService();

  visit(pageName: string) {
    const message = {
      behavior: 'enter',
      date: new Date(),
      pageName: pageName,
      path: window.location.pathname,
      url: window.location.href,
    };
    this.logger.log(message);
    appendToStorage('page', JSON.stringify(message));
  }

  leave(pageName: string) {
    const message = {
      behavior: 'leave',
      date: new Date(),
      pageName: pageName,
      path: window.location.pathname,
      url: window.location.href,
    };
    this.logger.log(message);
    appendToStorage('page', JSON.stringify(message));
  }
}
