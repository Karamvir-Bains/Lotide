const { assert } = require('chai');
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("return [2, 3] for positions of l in hello", () => {
    let key = "l";
    assert.deepEqual(letterPositions("hello")[key], [2, 3]);
  });
  it("return [1] for positions of o in world", () => {
    let key = "o";
    assert.deepEqual(letterPositions("world")[key], [1]);
  });
});