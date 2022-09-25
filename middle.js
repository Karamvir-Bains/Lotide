const eqArrays = function(arr1, arr2) {
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return console.log(`✅ Assertion Passed: Arrays Are Equal`);
  } else {
    return console.log(`🛑 Assertion Failed: Arrays Are Not Equal`);
  }
};

const middle = function(arr) {
  let newArr = [];
  if (arr.length <= 2) {
    return newArr;
  }
  
  if (arr.length % 2 === 0) {
    newArr.push(arr[arr.length / 2 - 1]);
    newArr.push(arr[arr.length / 2]);
  } else {
    newArr.push(arr[Math.floor(arr.length / 2)]);
  }
  return newArr;
};


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

assertArraysEqual(middle([1, 7, 4, 2, 1]), [3]);