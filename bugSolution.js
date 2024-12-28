function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  if (isNaN(a) || isNaN(b)) {
    return 0; // Handle NaN values
    //Alternatively: throw new Error('NaN encountered in addition.'); 
  }
  return a + b; // Normal addition
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10

// Improved handling for NaN
console.log(foo(NaN, 5)); // Output: 0
console.log(foo(5, NaN)); // Output: 0
console.log(foo(NaN, NaN)); // Output: 0