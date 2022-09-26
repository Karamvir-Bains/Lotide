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

// Takes in a string, and returns an array of indexes for each letter in an object
const letterPositions = function(sentence) {
  const results = {};
  for (let i in sentence) {
    let letter = sentence[i];
    if (results[letter]) {
      results[letter].push(Number(i));
    } else {
      results[letter] = [Number(i)];
    }
  }
  return results;
};

// Test Code
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);