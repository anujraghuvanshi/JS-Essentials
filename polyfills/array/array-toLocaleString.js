const myArray = [1, 'a', new Date()];

Array.prototype.myToLocaleString = function (locales, options) {
  if (this == null) {
    throw new TypeError('Array.prototype.toLocaleString called on null or undefined');
  }
  const array = Object(this);
  const length = array.length >>> 0;
  const result = [];

  for (let i = 0; i < length; i++) {
    const element = array[i];
    if (element == null) {
      result.push('');
    } else {
      if (typeof element.toLocaleString === 'function') {
        result.push(element.toLocaleString(locales, options));
      } else {
        result.push(String(element));
      }
    }
  }

  return result.join(',');
}

const result = myArray.myToLocaleString('en-US')

// Output here 
console.log('result => Iteration 1 => ', result)
