const noRepeat = require('./noRepeat');

describe('No repeats please - Return the number of total permutations of the provided string that don\'t have repeated consecutive letters. Assume that all characters in the provided string are each unique.', () => {
  it('should return a number', () => {
    expect(noRepeat('aab')).toEqual(expect.any(Number));
  });
  it('should return 2', () => {
    expect(noRepeat('aab')).toBe(2);
  });
  it('should return 0', () => {
    expect(noRepeat('aaa')).toBe(0);
  });
  it('should return 8', () => {
    expect(noRepeat('aabb')).toBe(8);
  });
  it('should return 3600', () => {
    expect(noRepeat('abcdefa')).toBe(3600);
  });
  it('should return 2640', () => {
    expect(noRepeat('abfdefa')).toBe(2640);
  });
  it('should return 0', () => {
    expect(noRepeat('zzzzzzzz')).toBe(0);
  });
  it('should return 1', () => {
    expect(noRepeat('a')).toBe(1);
  });
  it('should return 0', () => {
    expect(noRepeat('aaab')).toBe(0);
  });
  it('should return 12', () => {
    expect(noRepeat('aaabb')).toBe(12);
  });
});
