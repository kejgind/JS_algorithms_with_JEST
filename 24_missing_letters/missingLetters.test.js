const missingLetters = require('./missingLetters');

describe('Missing letters - Find the missing letter in the passed letter range and return it.', () => {
  it('should return a string', () => {
    expect(missingLetters('abd')).toEqual(expect.any(String));
  });
  it('should return undefined if given string does not miss any letters', () => {
    expect(missingLetters('abc')).toBe(undefined);
  });
  it('should return "d"', () => {
    expect(missingLetters('abce')).toBe('d');
  });
  it('should return "i"', () => {
    expect(missingLetters('abcdefghjklmno')).toBe('i');
  });
  it('should return undefined', () => {
    expect(missingLetters('bcd')).toBe(undefined);
  });
  it('should return undefined', () => {
    expect(missingLetters('yz')).toBe(undefined);
  });
});
