const assertArraysEqual = function(arr1, arr2) {
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return console.log(`🛑 Assertion Failed: Arrays Are Not Equal`);
    }
  }
  return console.log(`✅ Assertion Passed: Arrays Are Equal`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, "2", 3]);