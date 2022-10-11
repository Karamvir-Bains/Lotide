const assertArraysEqual = require('../assertArraysEqual');

// Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // True
assertArraysEqual([1, 2, 3], [1, "2", 3]); // False