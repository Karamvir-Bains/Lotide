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

module.exports = flatten;