const repeatString = require('./repeatString');

describe('Repeat a string repeat a string - Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.', () => {
  it('should return a string', () => {
    expect(repeatString('abc', 3)).toEqual(expect.any(String));
  });
  it('should return an empty string if "num" is not a positive number', () => {
    expect(repeatString('abc', -1)).toBe('');
  });
  it('should return an empty string if "num" is not a positive number', () => {
    expect(repeatString('abc', 0)).toBe('');
  });
  it('should return "***" for ("*", 3)', () => {
    expect(repeatString('*', 3)).toBe('***');
  });
  it('should return "abcabcabc" for ("abc", 3)', () => {
    expect(repeatString('abc', 3)).toBe('abcabcabc');
  });
  it('should return "abcabcabcabc" for ("abc", 4)', () => {
    expect(repeatString('abc', 4)).toBe('abcabcabcabc');
  });
  it('should return "abc" for ("abc", 1)', () => {
    expect(repeatString('abc', 1)).toBe('abc');
  });
  it('should return "********" for ("*", 8)', () => {
    expect(repeatString('*', 8)).toBe('********');
  });
  it('should return "" for ("abc", -2)', () => {
    expect(repeatString('abc', -2)).toBe('');
  });
});
