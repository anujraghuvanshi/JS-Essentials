const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myMap = function (callback, ...args) {
  let resultOutput = []
  for (i = 0; i < this.length; i++) {
    const res = callback.call(args, this[i], i, this);
    resultOutput.push(res)
  }
  return resultOutput;
}

const result = myArray.myMap(value => value * 2)

// Output here 
console.log('result => \n', result)