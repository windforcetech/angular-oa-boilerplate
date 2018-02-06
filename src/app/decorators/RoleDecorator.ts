export function Role(action: any): ClassDecorator {
  return function (constructor: any) {
    const ngOnInit = constructor.prototype.ngOnInit;

    if (action.type === 'action') {
      constructor.prototype.ngOnInit = function (...args) {
        console.log(constructor.prototype);
        if (ngOnInit) {
          ngOnInit.apply(this, args);
        }
      };
    }
  };
}
