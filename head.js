// Takes in 2 values to determine if they match, and console logs if they match or if they don't
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Takes in an array and returns the first element in the array
const head = function(arr) {
  return arr[0];
};

// Test Code
assertEqual(head([5,6,7]), 5); // True
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // True