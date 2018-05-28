const smallestCommon = require('./smallestCommon');

describe('Smallest Common Multiple - Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.', () => {
  it('should return a number', () => {
    expect(smallestCommon([1, 5])).toEqual(expect.any(Number));
  });
  it('should return 60', () => {
    expect(smallestCommon([1, 5])).toBe(60);
  });
  it('should return 60', () => {
    expect(smallestCommon([5, 1])).toBe(60);
  });
  it('should return 360360', () => {
    expect(smallestCommon([1, 13])).toBe(360360);
  });
  it('should return 6056820', () => {
    expect(smallestCommon([23, 18])).toBe(6056820);
  });
});
