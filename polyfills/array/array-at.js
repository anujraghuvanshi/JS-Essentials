const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myAt = function (index) {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myAt must be called on array')
  }

  if (index >= 0) {
    return this[index]
  }
  return this[0]
}

const result = myArray.myAt()

// Output here 
console.log('result => \n', result)
