const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myPop = function () {
  if (this.length) {
    const lastElement = this[this.length - 1]
    this.length -= 1
    return lastElement
  }
}

const result = myArray.myPop()

// Output here 
console.log('result (Popped Element) =>', result)
console.log('result (New Array) =>', myArray)