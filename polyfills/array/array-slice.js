const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.mySlice = function (start = 0, end = 0) {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.mySlice must be called on array')
  }

  if (start <= 0) {
    start += this.length
  }

  if (end <= 0) {
    end += this.length
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(this[i])
  }

  return result;
}

const result = myArray.mySlice(2, 4)

// Output here 
console.log('result => Sliced Values', result)