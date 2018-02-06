export function Role(action: any): ClassDecorator {
  return function (constructor: any) {
    const ngOnInit = constructor.prototype.ngOnInit;
    const ngAfterViewInit = constructor.prototype.ngAfterViewInit;

    if (action.type === 'action') {
      constructor.prototype.constructor = function (...args) {
        if (constructor.prototype.constructor) {
          constructor.prototype.constructor.apply(this, args);
        }
      };

      constructor.prototype.ngOnInit = function (...args) {
        if (ngOnInit) {
          ngOnInit.apply(this, args);
        }
      };

      constructor.prototype.ngAfterViewInit = function (...args) {
        console.log(constructor.prototype.getRole());
        if (ngAfterViewInit) {
          ngAfterViewInit.apply(this, args);
        }
      };
    }
  };
}
