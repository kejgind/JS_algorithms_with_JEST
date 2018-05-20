const seekAndDestroy = require('./seekAndDestroy');

describe('Seek and Destroy - You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.', () => {
  it('should return an array', () => {
    expect(seekAndDestroy([1, 2, 3], 3)).toEqual(expect.any(Array));
  });
  it('should return [1, 1]', () => {
    expect(seekAndDestroy([1, 2, 3, 1, 2, 3], 2, 3)).toEqual([1, 1]);
  });
  it('should return [1, 5, 1]', () => {
    expect(seekAndDestroy([1, 2, 3, 5, 1, 2, 3], 2, 3)).toEqual([1, 5, 1]);
  });
  it('should return [1]', () => {
    expect(seekAndDestroy([3, 5, 1, 2, 2], 2, 3, 5)).toEqual([1]);
  });
  it('should return []', () => {
    expect(seekAndDestroy([2, 3, 2, 3], 2, 3)).toEqual([]);
  });
  it('should return ["hamburger"]', () => {
    expect(seekAndDestroy(['tree', 'hamburger', 53], 'tree', 53)).toEqual([
      'hamburger',
    ]);
  });
});
