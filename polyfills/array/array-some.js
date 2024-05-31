const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.mySome = function (callback) {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.mySome must be called on array')
  }
  // Throw Error if callback is not a function
  if (typeof callback !== 'function') {
    throw new Error('Callback must be a function')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  for (i = 0; i < this.length; i++) {
    if (callback(this[i])) return true
  }
  return false;
}

const result = myArray.mySome(value => value === 2)

// Output here 
console.log('result => \n', result)