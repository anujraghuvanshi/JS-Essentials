const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


Array.prototype.myFilter = function (callback, ...args) {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myFilter must be called on array')
  }
  // Throw Error if callback is not a function
  if (typeof callback !== 'function') {
    throw new Error('Callback must be a function')
  }

  let resultOutput = []
  for (i = 0; i < this.length; i++) {
    const res = callback.call(args, this[i], i, this);
    if (res) resultOutput.push(this[i])
  }
  return resultOutput;
}

const result = myArray.myFilter(value => value % 2 == 0)

// Output here 
console.log('result => \n', result)
