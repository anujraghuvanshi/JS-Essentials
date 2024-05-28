const myArray = [5, 12, 130, 50, 44];

Array.prototype.myIncludes = function (value) {
  for (let i = this.length; i > 0; i--) {
    if (this[i] === value) return true
  }

  return false
}

const result = myArray.myIncludes(44)

// Output here 
console.log('result => ', result)
