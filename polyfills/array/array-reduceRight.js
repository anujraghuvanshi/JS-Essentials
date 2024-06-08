const myArray = [
  [0, 1],
  [2, 3],
  [4, 5],
];

Array.prototype.myReduceRight = function (cb, initialValue) {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myReduceRight must be called on array')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  let result;
  let startIndex = this.length - 1;

  if (arguments.length <= 1) {
    result = this[this.length - 1]
    startIndex = this.length - 2
  }

  if (arguments.length >= 2) {
    result = initialValue
  }

  for (i = startIndex; i >= 0; i--) {
    result = cb(result, this[i])
  }

  return result;
}

const result = myArray.myReduceRight((acc, value) => acc.concat(value), [8, 9])

// Output here 
console.log('result => \n', result)