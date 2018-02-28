import {LoggerService} from './logger.services';
import {Injectable} from '@angular/core';

@Injectable()
export class AnalyticsService {
  private logger: LoggerService = new LoggerService();
  visit(pageName: string) {
    this.logger.log('visit' + pageName);
  }

  leave(pageName: string) {
    this.logger.log('leave' + pageName);
  }
}
