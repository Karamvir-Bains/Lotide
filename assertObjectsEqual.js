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

// Returns true if both objects have identical keys with identical values
// Otherwise false.
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key of Object.keys(object1)) {
    let keyValue1 = object1[key];
    let keyValue2 = object2[key];
    if (Array.isArray(keyValue1) && Array.isArray(keyValue2)) {
      if (!eqArrays(keyValue1, keyValue2)) {
        return false;
      }
    } else if (keyValue1 !== keyValue2) {
      return false;
    }
  }
  return true;
};

// Takes in 2 objects and returns true if they match or false if they don't
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const adc = { a: "1", d: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

// Test Code
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
assertObjectsEqual(abc, adc);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);