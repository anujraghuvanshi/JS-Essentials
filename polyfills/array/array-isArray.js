const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.myIsArray = function (arg) {
  return Object.prototype.toString.call(arg) === '[object Array]';
}

const result = Array.myIsArray(myArray)

// Output here 
console.log('result => \n', result)
