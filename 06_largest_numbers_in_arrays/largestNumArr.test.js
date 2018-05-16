const largestNumArr = require('./largestNumArr');

describe('Return Largest Numbers in Arrays', () => {
  it('should return an "array".', () => {
    expect(
      largestNumArr([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1],
      ])
    ).toEqual(expect.any(Array));
  });
  it('should return "array" with biggest number in the provided arrays.', () => {
    expect(
      largestNumArr([
        [13, 27, 18, 26],
        [4, 5, 1, 3],
        [32, 35, 37, 39],
        [1000, 1001, 857, 1],
      ])
    ).toEqual([27, 5, 39, 1001]);
    expect(
      largestNumArr([
        [4, 9, 1, 3],
        [13, 35, 18, 26],
        [32, 35, 97, 39],
        [1000000, 1001, 857, 1],
      ])
    ).toEqual([9, 35, 97, 1000000]);
  });
});
