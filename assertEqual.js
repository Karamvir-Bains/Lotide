// Takes in 2 values to determine if they match, and console logs if they match or if they don't
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Code
assertEqual(1, 1); // True
assertEqual("Lighthouse Labs", "Bootcamp"); // False