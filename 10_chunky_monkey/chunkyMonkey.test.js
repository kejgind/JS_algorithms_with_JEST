const chunkyMonkey = require('./chunkyMonkey');

describe('Write a function that splits an array (first argument) into groups the length of "size" (second argument) and returns them as a two-dimensional array.', () => {
  it('should return an array', () => {
    expect(chunkyMonkey(['a', 'b'], 1)).toEqual(expect.any(Array));
  });
  it('should return [["a", "b"], ["c", "d"]]', () => {
    expect(chunkyMonkey(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });
  it('should return [[0, 1, 2], [3, 4, 5]]', () => {
    expect(chunkyMonkey([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]);
  });
  it('should return [[0, 1], [2, 3], [4, 5]]', () => {
    expect(chunkyMonkey([0, 1, 2, 3, 4, 5], 2)).toEqual([
      [0, 1],
      [2, 3],
      [4, 5],
    ]);
  });
  it('should return [[0, 1, 2, 3], [4, 5]]', () => {
    expect(chunkyMonkey([0, 1, 2, 3, 4, 5], 4)).toEqual([[0, 1, 2, 3], [4, 5]]);
  });
  it('should return [[0, 1, 2], [3, 4, 5], [6]]', () => {
    expect(chunkyMonkey([0, 1, 2, 3, 4, 5, 6], 3)).toEqual([
      [0, 1, 2],
      [3, 4, 5],
      [6],
    ]);
  });
  it('should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]', () => {
    expect(chunkyMonkey([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8],
    ]);
  });
  it('should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]', () => {
    expect(chunkyMonkey([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual([
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
      [8],
    ]);
  });
});
