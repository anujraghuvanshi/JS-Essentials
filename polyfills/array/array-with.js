const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myWith = function (index, value) {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myWith must be called on array')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  for (i = 0; i < this.length; i++) {
    if (i === index) {
      this[i] = value
    }
  }
  return this;
}

const result = myArray.myWith(2, 6)

// Output here 
console.log('result => \n', result)