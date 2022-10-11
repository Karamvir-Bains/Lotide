const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test Code
assertArraysEqual(middle([1]), []); // True
assertArraysEqual(middle([1, 2]), []); // True
assertArraysEqual(middle([1, 2, 3]), [2]); // True
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // True
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // True
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // True
assertArraysEqual(middle([1, 7, 4, 2, 1]), [3]); // False