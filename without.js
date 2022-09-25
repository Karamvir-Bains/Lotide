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

// Takes in 2 arrays, an original array and an array with items to remove.
// Returns a new array with all the original values excluding the removed values
const without = function(originalArr, removeArr) {
  let newArr = originalArr;
  for (let val of removeArr) {
    newArr = newArr.filter(e => e !== val);
  }
  return newArr;
};

// Test Code
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // Make sure the original array was not altered by the without function