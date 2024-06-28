Number.prototype.myValueOf = function () {
  if (typeof this !== 'object' || !(this instanceof Number)) {
    throw new TypeError('Number.prototype.myValueOf called on non-number object');
  }
  return this.valueOf();
};

const value = new Number(135);
const result = value.myValueOf();
console.log('Result => ', result);