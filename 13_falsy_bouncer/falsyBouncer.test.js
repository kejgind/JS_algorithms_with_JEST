const falsyBouncer = require('./falsyBouncer');

describe('Falsy Bouncer - Remove all falsy values from an array.', () => {
  it('should return an array', () => {
    expect(falsyBouncer(['a'])).toEqual(expect.any(Array));
  });
  it('should return [7, "ate", 9]', () => {
    expect(falsyBouncer([7, 'ate', '', false, 9])).toEqual([7, 'ate', 9]);
  });
  it('should return ["a", "b", "c"]', () => {
    expect(falsyBouncer(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });
  it('should return []', () => {
    expect(falsyBouncer([false, null, 0, NaN, undefined, ''])).toEqual([]);
  });
  it('should return [1, 2]', () => {
    expect(falsyBouncer([1, null, NaN, 2, undefined])).toEqual([1, 2]);
  });
});
