// Takes in 2 arrays and returns true if they match or false if they don't
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
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

// Takes in an array, loops through each item and applies the callback function requirements.
// Returns an array with the changes
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);
assertArraysEqual(map(numbers, number => number >= 3), [false, false, true, true, true]);
