// Takes in 2 arrays and returns true if they match or false if they don't
const eqArrays = function(arr1, arr2) {
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// Takes in 2 arrays to determine if they match, and console logs if they match or if they don't
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅ Assertion Passed: Arrays Are Equal`);
  } else {
    return console.log(`🛑 Assertion Failed: Arrays Are Not Equal`);
  }
};

// Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]); // True
assertArraysEqual([1, 2, 3], [1, "2", 3]); // False