// Takes in 2 arrays, an original array and an array with items to remove.
// Returns a new array with all the original values excluding the removed values
const without = function(originalArr, removeArr) {
  let newArr = originalArr;
  for (let val of removeArr) {
    newArr = newArr.filter(e => e !== val);
  }
  return newArr;
};

module.exports = without;