const { assert } = require('chai');
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns true if flattened array1 is equal to array2", () => {
    let array1 = [1, 2, [3, 4], 5, [6]];
    let array2 = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(array1), array2);
  });
});