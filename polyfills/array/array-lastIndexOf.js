const myArray = [5, 12, 44, 130, 50, 44];

Array.prototype.myLastIndexOf = function (value, fromIndex = this.length - 1) {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myLastIndexOf must be called on array')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  for (let i = fromIndex; i >= 0; i--) {
    if (this[i] === value) return i
  }

}

const result = myArray.myLastIndexOf(44)
const result2 = myArray.myLastIndexOf(44, 4)

// Output here 
console.log('result => \n', result)
console.log('result2 => \n', result2)
