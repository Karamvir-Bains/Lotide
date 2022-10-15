const { assert } = require('chai');
const eqArrays = require('../eqArrays');

describe("#eqObjects", () => {
  it("returns true for a === b", () => {
    let a = [[2, 3], [4]];
    let b = [[2, 3], [4]];
    assert.strictEqual(eqArrays(a, b), true);
  });
  it("returns false for a === b", () => {
    let a = [[2, 3], [4]];
    let b = [[2, 3], [4, 5]];
    assert.strictEqual(eqArrays(a, b), false);
  });
  it("returns false for a === b", () => {
    let a = [[2, 3], [4]];
    let b = [[2, 3], 4];
    assert.strictEqual(eqArrays(a, b), false);
  });
  
});