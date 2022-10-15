// allItems: an array of values that we need to look through
// itemsToCount: an object specifying what to values count
// Returns an object with how many times that value was found in allItems
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;