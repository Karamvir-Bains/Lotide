// Reclusively checks if both objects have identical keys with identical values
// Otherwise false.
const eqObjects = function(object1, object2) {
  if (typeof object1 !== 'object') return object1 === object2;

  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  if (Array.isArray(object1)) return false;
  if (typeof object1 !== typeof object2) return false;
  
  for (let key in object1) {
    if (!(key in object2)) return false;
    if (!eqObjects(object1[key], object2[key])) return false;
  }
  return true;
};

module.exports = eqObjects;