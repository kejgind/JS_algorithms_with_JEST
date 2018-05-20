/**
 * Arrow functions do not have their own arguments object.
 * Thats why when we deal with functions that as a parameter
 * recive arguments object, we need to use normal functions.
 */

const seekAndDestroy = function(arr) {
  [...arguments]
    .slice(1)
    .forEach(seeker => (arr = arr.filter(el => el !== seeker)));
  return arr;
};

module.exports = seekAndDestroy;
