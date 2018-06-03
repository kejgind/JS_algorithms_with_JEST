const symmetricDifference = require('./symmetricDifference');

describe('Symmetric Difference - Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.', () => {
  it('should return an array', () => {
    expect(symmetricDifference([1, 2, 3], [5, 2, 1, 4])).toEqual(
      expect.any(Array)
    );
  });
  it('should return [3, 4, 5]', () => {
    expect(symmetricDifference([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
  });
  it('should should contain only three elements', () => {
    expect(symmetricDifference([1, 2, 3], [5, 2, 1, 4]).length).toBe(3);
  });
  it('should return [1, 4, 5]', () => {
    expect(symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual([
      1,
      4,
      5,
    ]);
  });
  it('should should contain only three elements', () => {
    expect(symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]).length).toBe(3);
  });
  it('should return [1, 4, 5]', () => {
    expect(
      symmetricDifference([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])
    ).toEqual([1, 4, 5]);
  });
  it('should should contain only three elements', () => {
    expect(
      symmetricDifference([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]).length
    ).toBe(3);
  });
  it('should return [2, 3, 4, 6, 7]', () => {
    expect(
      symmetricDifference(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3]
      )
    ).toEqual([2, 3, 4, 6, 7]);
  });
  it('should should contain only five elements', () => {
    expect(
      symmetricDifference(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3]
      ).length
    ).toBe(5);
  });
  it('should return [1, 2, 4, 5, 6, 7, 8, 9]', () => {
    expect(
      symmetricDifference(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3],
        [5, 3, 9, 8],
        [1]
      )
    ).toEqual([1, 2, 4, 5, 6, 7, 8, 9]);
  });
  it('should should contain only eight elements', () => {
    expect(
      symmetricDifference(
        [3, 3, 3, 2, 5],
        [2, 1, 5, 7],
        [3, 4, 6, 6],
        [1, 2, 3],
        [5, 3, 9, 8],
        [1]
      ).length
    ).toBe(8);
  });
});
