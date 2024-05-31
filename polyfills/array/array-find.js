const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myFind = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myFind must be called on array')
  }

  if (typeof callback !== 'function') {
    throw new Error('callback must be a function')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return this[i]
  }
}

const result = myArray.myFind(v => v * 2 == 2)

// Output here 
console.log('result => \n', result)
