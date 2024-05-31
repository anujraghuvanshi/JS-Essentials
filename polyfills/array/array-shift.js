const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myShift = function () {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myShift must be called on array')
  }
  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  const firstEl = this[0];
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  this.length -= 1;

  return firstEl;
}

const result = myArray.myShift()

// Output here 
console.log('result => Shifted Value', result)
console.log('result => Modified Array', myArray)