const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myReverse = function () {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myReverse must be called on array')
  }
  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  let start = 0, end = this.length - 1;
  let newArray = [...this]
  while (start < end) {
    let temp = newArray[start];
    newArray[start] = newArray[end];
    newArray[end] = temp;
    start++;
    end--
  }

  return newArray;
}

const result = myArray.myReverse()

// Output here 
console.log('result => Reversed', result)
console.log('result => Original Array', myArray)