const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myFrom = function (iterable, mapFn, args) {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myFrom must be called on array')
  }

  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  const array = []
  for (i = 0; i < iterable.length; i++) {
    if (mapFn) {
      array.push(mapFn.call(args, iterable[i], i, iterable))
    } else {
      array.push(iterable[i])
    }
  }

  return array;
}

const result = myArray.myFrom(myArray, (v) => v * 2)

// Output here 
console.log('result => \n', result)