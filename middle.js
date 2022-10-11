// Takes in an array and returns elements that are closest to the middle of an array
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

module.exports = middle;