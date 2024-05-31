const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myPush = function () {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myPush must be called on array')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
}

myArray.myPush(11, 12)

// Output here 
console.log('result (New Array) =>', myArray)