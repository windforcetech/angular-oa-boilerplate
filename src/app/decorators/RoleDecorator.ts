export function Role(role: string): ClassDecorator {
  return function (constructor: any) {
    constructor.prototype.ngOnInit = function (...args) {
      console.log(role);
    };
  };
}
