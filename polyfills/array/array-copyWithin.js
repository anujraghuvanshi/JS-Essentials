const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myCopyWithin = function (target = 0, start = 0, end = this.length) {

  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myCopyWithin must be called on array')
  }

  const O = Object(this);
  const len = O.length >>> 0;
  const relativeTarget = target >> 0;
  const relativeStart = start >> 0;
  const relativeEnd = end === undefined ? len : end >> 0;
  const final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);
  let from = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);
  let to = relativeTarget < 0 ? Math.max(len + relativeTarget, 0) : Math.min(relativeTarget, len);

  let count = Math.min(final - from, len - to);
  let direction = 1;

  if (from < to && to < (from + count)) {
    direction = -1;
    from += count - 1;
    to += count - 1;
  }

  while (count > 0) {
    if (from in O) {
      O[to] = O[from];
    } else {
      delete O[to];
    }

    from += direction;
    to += direction;
    count--;
  }

  return O;
}

const result = myArray.myCopyWithin(2, 0)

// Output here 
console.log('result => \n', result)

