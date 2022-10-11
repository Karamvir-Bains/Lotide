// Takes in an array and returns everything but the first element in the array
const tail = function(arr) {
  return arr.slice(1);
};

module.exports = tail;