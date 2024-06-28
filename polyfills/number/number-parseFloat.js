Number.myParseFloat = function (value) {
  const str = String(value).trim();

  const regex = /^[-+]?\d*(\.\d+)?([eE][-+]?\d+)?/;
  const result = regex.exec(str);

  if (result && result[0] !== '') {
    return Number(result[0]);
  } else {
    return NaN;
  }
}

console.log(Number.myParseFloat('3.14'));
console.log(Number.myParseFloat('  -3.14  '));
console.log(Number.myParseFloat('123abc'));
console.log(Number.myParseFloat('abc123'));
console.log(Number.myParseFloat('3.14e2'));
console.log(Number.myParseFloat(''));
console.log(Number.myParseFloat(' '));
