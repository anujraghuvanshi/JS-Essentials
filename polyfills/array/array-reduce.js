const myArray = [1, 2, 3, 4]

Array.prototype.myReduce = function (cb, initialValue) {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myReduce must be called on array')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  let result;
  let startIndex = 0;

  if (arguments.length <= 1) {
    result = this[0]
    startIndex = 1
  }

  if (arguments.length >= 2) {
    result = initialValue
  }

  for (i = startIndex; i < this.length; i++) {
    result = cb(result, this[i])
  }

  return result;
}

const result = myArray.myReduce((acc, value) => acc + value, 0)

// Output here 
console.log('result => \n', result)