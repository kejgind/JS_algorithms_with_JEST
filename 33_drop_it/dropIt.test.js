const dropIt = require('./dropIt');

describe('Drop it - Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.', () => {
  it('should return an array', () => {
    expect(
      dropIt([1, 2, 3, 4], function(n) {
        return n >= 3;
      })
    ).toEqual(expect.any(Array));
  });
  it('should return [3, 4]', () => {
    expect(
      dropIt([1, 2, 3, 4], function(n) {
        return n >= 3;
      })
    ).toEqual([3, 4]);
  });
  it('should return [1, 0, 1]', () => {
    expect(
      dropIt([0, 1, 0, 1], function(n) {
        return n === 1;
      })
    ).toEqual([1, 0, 1]);
  });
  it('should return [1, 2, 3]', () => {
    expect(
      dropIt([1, 2, 3], function(n) {
        return n > 0;
      })
    ).toEqual([1, 2, 3]);
  });
  it('should return []', () => {
    expect(
      dropIt([1, 2, 3, 4], function(n) {
        return n > 5;
      })
    ).toEqual([]);
  });
  it('should return [7, 4]', () => {
    expect(
      dropIt([1, 2, 3, 7, 4], function(n) {
        return n > 3;
      })
    ).toEqual([7, 4]);
  });
  it('should return [3, 9, 2]', () => {
    expect(
      dropIt([1, 2, 3, 9, 2], function(n) {
        return n > 2;
      })
    ).toEqual([3, 9, 2]);
  });
});
