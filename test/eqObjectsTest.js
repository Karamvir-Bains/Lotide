const { assert } = require('chai');
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("returns true for a === b", () => {
    let a = { a: { z: 1 }, b: 2 };
    let b = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(a, b), true);
  });
  it("returns false for a === b", () => {
    let a = { a: { z: { b: 3 } }, b: 2 };
    let b = { a: { z: { b: 130 } }, b: 2 };
    assert.strictEqual(eqObjects(a, b), false);
  });
  it("returns true for a === b", () => {
    let a = { a: { y: 0, z: 1 }, b: 2 };
    let b = { a: { y: 0, z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(a, b), true);
  });
  it("returns false for a === b", () => {
    let a = { a: { y: 0, z: 1 }, b: 2 };
    let b = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(a, b), false);
  });
  it("returns false for a === b", () => {
    let a = { a: { y: 0, z: 1 }, b: 2 };
    let b = { a: 1, b: 2 };
    assert.strictEqual(eqObjects(a, b), false);
  });
  it("returns true for a === b", () => {
    let a = { b: 2, a: 1 };
    let b = { a: 1, b: 2 };
    assert.strictEqual(eqObjects(a, b), true);
  });
});