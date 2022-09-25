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

// Takes in an array that has nested arrays, and returns an array with all the same values but no nested arrays
const flatten = function(arr) {
  let newArr = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      for (let child of val) {
        newArr.push(child);
      }
    } else {
      newArr.push(val);
    }
  }
  return newArr;
};

// Test Code
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // True