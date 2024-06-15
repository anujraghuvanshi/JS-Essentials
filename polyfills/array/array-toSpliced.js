const myArray = ['Jan', 'Feb', 'March', 'April', 'June'];

Array.prototype.toMySpliced = function () {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.toMySpliced must be called on array')
  }

  if (!arguments.length) {
    return this
  }

  const array = [...this]

  let start = arguments[0]
  let itemsToDelete = 0
  let newItems = []
  let result = []

  if (start < 0) {
    start += array.length
  }

  if (arguments.length > 1) {
    itemsToDelete = arguments[1]
  } else {
    itemsToDelete = array.length - start
  }

  if (arguments.length > 2) {
    for (let index = 2; index < arguments.length; index++) {
      newItems.push(arguments[index])
    }
  }

  if (itemsToDelete > 0) {
    for (i = 0; i < itemsToDelete; i++) {
      result.push(array[start + i])
    }

    for (let i = start, j = 0; i < array.length - itemsToDelete; i++, j++) {
      array[start + j] = array[j + start + itemsToDelete]
    }

    array.length = array.length - itemsToDelete;
  }

  if (newItems.length > 0) {
    for (let i = array.length - 1; i >= start; i--) {
      array[i + newItems.length] = array[i];
    }

    for (let i = 0; i < newItems.length; i++) {
      array[start + i] = newItems[i];
    }

  }

  return array
}

const result = myArray.toMySpliced(4, 0, 'May')

// Output here 
console.log('result => Sliced Values', result)
console.log('result => Modified array', myArray)