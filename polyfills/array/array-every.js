const myArray = [5, 6, 7, 8, 9, 10]

Array.prototype.myEvery = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myEvery must be called on array')
  }

  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) return false
  }

  return true
}


const result = myArray.myEvery(value => value > 5)

// Output here 
console.log('result => \n', result)
