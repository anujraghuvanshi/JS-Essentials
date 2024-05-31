const myArray = [5, 12, 130, 50, 44];

Array.prototype.myValues = function () {
  let newArray = []

  for (let i = 0; i < this.length; i++) {
    newArray.push(this[i])
  }

  function* iterator() {
    yield* newArray
  }

  return iterator()
}

const result = myArray.myValues()

// Output here 
console.log('result => Iteration 1 => ', result.next().value)
console.log('result => Iteration 2 => ', result.next().value)
