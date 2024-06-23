Number.isMyIsNan = function (value) {
  return typeof value === 'number' && isNaN(value);
}

const result = Number.isMyIsNan(NaN)

// Output here 
console.log('result => ', result)
