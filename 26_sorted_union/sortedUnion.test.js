const sortedUnion = require('./sortedUnion');

describe('Sorted Union - Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.', () => {
  it('shoud return an array', () => {
    expect(sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual(
      expect.any(Array)
    );
  });
  it('shoud return [1, 3, 2, 5, 4]', () => {
    expect(sortedUnion([1, 3, 2], [5, 2, 1, 4], [2, 1])).toEqual([
      1,
      3,
      2,
      5,
      4,
    ]);
  });
  it('shoud return [1, 3, 2, [5], [4]]', () => {
    expect(sortedUnion([1, 3, 2], [1, [5]], [2, [4]])).toEqual([
      1,
      3,
      2,
      [5],
      [4],
    ]);
  });
  it('shoud return [1, 2, 3, 5]', () => {
    expect(sortedUnion([1, 2, 3], [5, 2, 1])).toEqual([1, 2, 3, 5]);
  });
  it('shoud return [1, 2, 3, 5, 4, 6, 7, 8]', () => {
    expect(sortedUnion([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toEqual([
      1,
      2,
      3,
      5,
      4,
      6,
      7,
      8,
    ]);
  });
});
