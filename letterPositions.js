// Takes in a string, and returns an array of indexes for each letter in an object
const letterPositions = function(sentence) {
  const results = {};
  for (let i in sentence) {
    let letter = sentence[i];
    if (results[letter]) {
      results[letter].push(Number(i));
    } else {
      results[letter] = [Number(i)];
    }
  }
  return results;
};

module.exports = letterPositions;