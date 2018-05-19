const slasherFlick = require('./slasherFlick');

describe('Slasher Flick - Return the remaining elements of an array after chopping off "n" elements from the head.', () => {
  it('should return an "array"', () => {
    expect(slasherFlick([1, 2, 3], 2)).toEqual(expect.any(Array));
  });
  it('should return an [3]', () => {
    expect(slasherFlick([1, 2, 3], 2)).toEqual([3]);
  });
  it('should return an [1, 2, 3]', () => {
    expect(slasherFlick([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });
  it('should return an []', () => {
    expect(slasherFlick([1, 2, 3], 9)).toEqual([]);
  });
  it('should return an []', () => {
    expect(slasherFlick([1, 2, 3], 4)).toEqual([]);
  });
  it('should return an ["fries", "shake"]', () => {
    expect(slasherFlick(['burgers', 'fries', 'shake'], 1)).toEqual([
      'fries',
      'shake',
    ]);
  });
  it('should return an ["cheese", 4]', () => {
    expect(
      slasherFlick([1, 2, 'chicken', 3, 'potatoes', 'cheese', 4], 5)
    ).toEqual(['cheese', 4]);
  });
});
