const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myFill = function (value = undefined, start = 0, end = 0) {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myFill must be called on array')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  if (start < 0) {
    start = start + this.length
  }

  if (end <= 0) {
    end = end + this.length
  }

  for (let i = start; i < end; i++) {
    this[i] = value
  }

  return this
}

const result = myArray.myFill(1, -2)

// Output here 
console.log('result => \n', result)
