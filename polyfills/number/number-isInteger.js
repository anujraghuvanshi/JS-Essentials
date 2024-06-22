Number.isMyInteger = function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}

const result = Number.isMyInteger(1)

// Output here 
console.log('result => ', result)
