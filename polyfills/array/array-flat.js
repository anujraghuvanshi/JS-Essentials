const myArray = [5, 12, 130, 50, 44, [1, 2, 3, 4, 5, [6, 7]]];

Array.prototype.myFlat = function (depth = 1) {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myFlat must be called on array')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  let newArray = [];

  (function flatten(array, depth) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && depth > 0) {
        flatten(array[i], depth - 1)
      } else {
        newArray.push(array[i])
      }
    }
  })(this, depth)

  return newArray
}

const result = myArray.myFlat()

// Output here 
console.log('result => \n', result)
