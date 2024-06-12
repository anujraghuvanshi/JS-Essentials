const myArray = [10, 20, 3, 4, 5, 6, 70, 8, 2, 1]

function defaultComparator(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

Array.prototype.mySort = function (cb = defaultComparator) {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.mySort must be called on array')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  for (i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (cb(this[i], this[j]) > 0) {
        const swap = this[i];
        this[i] = this[j];
        this[j] = swap;
      }
    }
  }
}

myArray.mySort()

// Output here 
console.log('result => \n', myArray)