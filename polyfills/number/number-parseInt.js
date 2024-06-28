Number.myParseInt = function (str, radix) {
  str = String(str).trim();

  if (!radix) {
    radix = 10;
  }

  if (str) {
    const result = parseInt(str, radix);
    return isNaN(result) ? NaN : result;
  }

  return NaN;
}

console.log(Number.myParseInt('42'));
console.log(Number.myParseInt('   42'));
console.log(Number.myParseInt('42abc'));
console.log(Number.myParseInt('abc42'));
console.log(Number.myParseInt('101', 2));
console.log(Number.myParseInt('0xFF', 16));
console.log(Number.myParseInt(''));
console.log(Number.myParseInt(' '));
