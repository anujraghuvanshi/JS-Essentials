const myArray = [5, 12, 130, 50, 44];

Array.prototype.myJoin = function (separator = ',') {
  let result = ''

  for (let i = 0; i < this.length; i++) {
    if (i === this.length - 1) {
      result += this[i];
    } else {
      result += this[i] + separator.toString();
    }
  }

  return result
}

const result = myArray.myJoin(10)

// Output here 
console.log('result => ', result)
