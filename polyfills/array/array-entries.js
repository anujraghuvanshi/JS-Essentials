const myArray = [5, 10, 15, 20, 25, 30, 35, 40]

Array.prototype.myEntries = function (index) {
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myEntries must be called on array')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  const iteratorArray = this.map((item, index) => [index, item])

  function* iterator() {
    yield* iteratorArray;
  }

  return iterator()
}

const result = myArray.myEntries()

// Output here 
console.log('result (Iteration 1) => \n', result.next().value)
console.log('result (Iteration 2) => \n', result.next().value)
