const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myConcat = function () {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myConcat must be called on array')
  }
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(this[i])
  }

  for (let j = 0; j < arguments.length; j++) {
    if (Array.isArray(arguments[j])) {
      for (let k = 0; k < arguments[j].length; k++) {
        newArray.push(arguments[j][k])
      }
    } else {
      newArray.push(arguments[j])
    }
  }
  return newArray
}

const anotherArray = [11, 12, 13]
const result = myArray.myConcat(anotherArray)

// Output here 
console.log('result => \n', result)
