const myArray = ['Jan', 'Feb', 'March', 'April', 'June'];

Array.prototype.mySplice = function () {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.mySplice must be called on array')
  }

  if (!arguments.length) {
    return this
  }

  let start = arguments[0]
  let itemsToDelete = 0
  let newItems = []
  let result = []

  if (start < 0) {
    start += this.length
  }

  if (arguments.length > 1) {
    itemsToDelete = arguments[1]
  }

  if (arguments.length > 2) {
    for (let index = 2; index < arguments.length; index++) {
      newItems.push(arguments[index])
    }
  }

  if (itemsToDelete > 0) {
    for (i = 0; i < itemsToDelete; i++) {
      result.push(this[start + i])
    }

    for (let i = start, j = 0; i < this.length - itemsToDelete; i++, j++) {
      this[start + j] = this[j + start + itemsToDelete]
    }

    this.length = this.length - itemsToDelete;
  }

  if (newItems.length > 0) {
    for (let i = this.length - 1; i >= start; i--) {
      this[i + newItems.length] = this[i];
    }

    for (let i = 0; i < newItems.length; i++) {
      this[start + i] = newItems[i];
    }

  }

  return result
}

const result = myArray.mySplice(4, 0, 'May')

// Output here 
console.log('result => Sliced Values', result)
console.log('result => Modified array', myArray)