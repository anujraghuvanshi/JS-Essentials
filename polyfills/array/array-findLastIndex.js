const myArray = [5, 12, 130, 50, 44];

Array.prototype.myFindLastIndex = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myFindLastIndex must be called on array')
  }

  if (typeof callback !== 'function') {
    throw new Error('callback must be a function')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  for (let i = this.length; i > 0; i--) {
    if (callback(this[i], i, this)) return i
  }

}

const result = myArray.myFindLastIndex(v => v > 45)

// Output here 
console.log('result => \n', result)
