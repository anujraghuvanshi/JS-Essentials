const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myFindIndex = function (callback) {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myFindIndex must be called on array')
  }

  if (typeof callback !== 'function') {
    throw new Error('callback must be a function')
  }

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) return i
  }

  return -1
}

const result = myArray.myFindIndex(v => v * 200 == 2)

// Output here 
console.log('result => \n', result)
