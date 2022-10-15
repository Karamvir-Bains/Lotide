// Takes in an array, loops through each item and applies the callback function requirements.
// Returns an array with the changes
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;