// Reclusively checks if both arrays and returns true if they match or false if they don't
const eqArrays = function(arr1, arr2) {
  if (!(Array.isArray(arr1))) return arr1 === arr2;
  if (arr1.length !== arr2.length) return false;

  for (let index in arr1) {
    if (!eqArrays(arr1[index], arr2[index])) return false;
  }
  return true;
};

module.exports = eqArrays;