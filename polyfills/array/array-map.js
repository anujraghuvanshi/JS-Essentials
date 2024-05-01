const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myMap = function (callback, ...args) {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myMap must be called on array')
  }
  // Throw Error if callback is not a function
  if (typeof callback !== 'function') {
    throw new Error('Callback must be a function')
  }

  let resultOutput = []
  for (i = 0; i < this.length; i++) {
    const res = callback.call(args[0], this[i], i, this);
    resultOutput.push(res)
  }
  return resultOutput;
}

const result = myArray.myMap(value => value * 2)

// Output here 
console.log('result => \n', result)