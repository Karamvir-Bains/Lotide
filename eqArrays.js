// Takes in 2 values to determine if they match, and console logs if they match or if they don't
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// Test Code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // True
assertEqual(eqArrays([1, 2, 3], [1, 4, 3]), true); // False