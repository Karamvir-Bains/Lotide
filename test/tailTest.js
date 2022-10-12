const { assert } = require('chai');
const tail = require("../tail");

describe("#tail", () => {
  it("returns 3 for [1, 2, 3, 4]", () => {
    assert.strictEqual(tail([1, 2, 3, 4]).length, 3);
  });
  it("returns ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});