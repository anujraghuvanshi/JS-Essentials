const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myForEach = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myForEach must be called on array')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  if (typeof callback !== 'function') {
    throw new Error('callback must be a function')
  }

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

myArray.myForEach(value => {
  value = value * 2;
  console.log('Value at iteration is-', value)
})
