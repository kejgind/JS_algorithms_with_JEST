const reverseString = require('./reverseString');

describe('Reverse given string.', () => {
  it('should return null', () => {
    expect(reverseString({})).toBe(null);
  });
  it('should return null', () => {
    expect(reverseString([])).toBe(null);
  });
  it('should return null', () => {
    expect(reverseString(25)).toBe(null);
  });
  it('should return string', () => {
    expect(reverseString('hello')).toEqual(expect.any(String));
  });
  it('should return \'hello\' to \'olleh\'', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  it('should reverse \'Howdy\' to \'ydwoH\'.', () => {
    expect(reverseString('Howdy')).toBe('ydwoH');
  });
  it('should reverse \'Greetings from Earth\' to \'htraE morf sgniteerG\'.', () => {
    expect(reverseString('Greetings from Earth')).toBe('htraE morf sgniteerG');
  });
});
