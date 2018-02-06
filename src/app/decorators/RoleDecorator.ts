import {AuthService} from '../services/auth.service';

export function Role(action: any): ClassDecorator {
  return function (constructor: any) {
    const authService = new AuthService();
    const ngOnInit = constructor.prototype.ngOnInit;

    if (action.type === 'action') {
      constructor.prototype.ngOnInit = function (...args) {
        if (ngOnInit) {
          ngOnInit.apply(this, args);
        }
        const roleAction = authService.role + 'Action';
        if (constructor.prototype[roleAction]) {
          constructor.prototype[roleAction].apply(this);
        }
      };
    }
  };
}
