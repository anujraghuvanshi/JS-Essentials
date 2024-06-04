const myArray = [{ name: "Anuj Singh" }, 5, 12, 130, 50, 44];

Array.prototype.myToString = function () {
  return this.join(',');
}

const result = myArray.myToString()

// Output here 
console.log('result => Iteration 1 => ', result)
