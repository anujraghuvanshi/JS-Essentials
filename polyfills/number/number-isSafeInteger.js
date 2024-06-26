Number.isMySafeInteger = function (value) {
  return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
}

const result = Number.isMySafeInteger(1)
const result1 = Number.isMySafeInteger(3); // true
const result2 = Number.isMySafeInteger(2 ** 53); // false
const result3 = Number.isMySafeInteger(2 ** 53 - 1); // true
const result4 = Number.isMySafeInteger(NaN); // false
const result5 = Number.isMySafeInteger(Infinity); // false
const result6 = Number.isMySafeInteger("3"); // false
const result7 = Number.isMySafeInteger(3.1); // false
const result8 = Number.isMySafeInteger(3.0); // true

// Output here 
console.log('result => ', result)
console.log('result => ', result1)
console.log('result => ', result2)
console.log('result => ', result3)
console.log('result => ', result4)
console.log('result => ', result5)
console.log('result => ', result6)
console.log('result => ', result7)
console.log('result => ', result8)
