Number.isMyFinite = function (value) {
  return typeof value === 'number' && isFinite(value);
}

const result = Number.isMyFinite(1 / 0)

// Output here 
console.log('result => ', result)
