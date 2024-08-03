Number.prototype.myToString = function (radix) {
  // Use base 10 if radix is not provided
  if (radix === undefined) {
    radix = 10;
  }

  // Ensure radix is within valid range (2 to 36)
  if (radix < 2 || radix > 36) {
    throw new RangeError('toString() radix must be between 2 and 36');
  }

  // Convert number to string with specified radix
  return this.toString(radix);
};

console.log((42).myToString());        // "42" (default base 10)
console.log((42).myToString(10));      // "42" (base 10)
console.log((42).myToString(2));       // "101010" (base 2)
console.log((255).myToString(16));     // "ff" (base 16)
console.log((64).myToString(8));       // "100" (base 8)
console.log((123456).myToString(36));  // "2n9c" (base 36)s