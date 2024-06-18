const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myReverse = function () {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myReverse must be called on array')
  }
  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  let start = 0, end = this.length - 1;

  while (start < end) {
    let temp = this[start];
    this[start] = this[end];
    this[end] = temp;
    start++;
    end--
  }

  return this;
}

myArray.myReverse()

// Output here 
console.log('result => Modified Array', myArray)