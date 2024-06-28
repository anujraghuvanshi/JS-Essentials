Number.prototype.myToFixed = function (digits) {
  if (isNaN(this) || this === Infinity || this === -Infinity) {
    return this.toString();
  }

  var isNegative = this < 0;
  var value = Math.abs(this);

  var power = Math.pow(10, digits);
  var roundedValue = Math.round(value * power) / power;

  var result = roundedValue.toString();

  if (digits > 0) {
    var decimalIndex = result.indexOf('.');
    if (decimalIndex === -1) {
      result += '.';
      decimalIndex = result.length - 1;
    }
    while (result.length - decimalIndex - 1 < digits) {
      result += '0';
    }
  }

  if (isNegative) {
    result = '-' + result;
  }

  return result;
};

const result = 135.1233.myToFixed(2)
console.log('Result => ', result)