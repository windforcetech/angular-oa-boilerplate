import {AnalyticsService} from '../services/analytics.services';

export function PageTrack(pageName: string): ClassDecorator {
  return function (constructor: any) {
    const analyticsService = new AnalyticsService();

    const ngOnInit = constructor.prototype.ngOnInit;

    constructor.prototype.ngOnInit = function (...args) {
      analyticsService.visit(pageName);
      if (ngOnInit) {
        ngOnInit.apply(this, args);
      }
    };

    const ngOnDestroy = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function (...args) {
      analyticsService.leave(pageName);
      if (ngOnDestroy) {
        ngOnDestroy.apply(this, args);
      }
    };

  };
}
