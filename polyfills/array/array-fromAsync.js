const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.myFromAsync = async function (iterable, mapFn, thisArg) {
  // Throw Error if function is not called on array.
  if (!Array.isArray(this)) {
    throw new Error('Array.prototype.myFromAsync must be called on array');
  }
  /**
   * ORIGINAL LOGIC STARTS HERE
   */
  const array = [];
  let index = 0;

  const iterator = iterable[Symbol.asyncIterator] ? iterable[Symbol.asyncIterator]() : iterable[Symbol.iterator]();

  while (true) {
    const { value, done } = await iterator.next();
    if (done) break;
    array.push(mapFn ? await mapFn.call(thisArg, value, index, iterable) : value);
    index++;
  }

  return array;
};

// Output here 
const testMyFunction = async () => {
  const result = await myArray.myFromAsync(myArray, async (v) => v * 2);
  console.log('result => \n', result);
};

testMyFunction();
