const myArray = [1, 2, 1, [1, 3]];

Array.prototype.myFlatMap = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myFlatMap must be called on array')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  let result = []
  for (let i = 0; i < this.length; i++) {
    const cbResult = callback(this[i], i, this)

    if (Array.isArray(cbResult)) {
      for (let j = 0; j < cbResult.length; j++) {
        result.push(cbResult[j])
      }
    } else {
      result.push(cbResult)
    }
  }

  return result
}

const result = myArray.flatMap(value => (value === 2 ? [2, 2] : value))

// Output here 
console.log('result => \n', result)
