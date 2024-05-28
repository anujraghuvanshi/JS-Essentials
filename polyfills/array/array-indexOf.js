const myArray = [5, 12, 130, 50, 44];

Array.prototype.myIndexOf = function (value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === value) return i
  }

  return -1
}

const result = myArray.myIndexOf(12)

// Output here 
console.log('result => ', result)
