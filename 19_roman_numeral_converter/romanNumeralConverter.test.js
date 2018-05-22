const romanNumeralConverter = require('./romanNumeralConverter');

describe('Roman Numeral Converter - Convert the given number into a roman numeral.', () => {
  it('should return a string', () => {
    expect(romanNumeralConverter(5)).toEqual(expect.any(String));
  });
  it('should return all upper-case', () => {
    expect(romanNumeralConverter(1)).toMatch(/I/);
  });
  it('should return "II"', () => {
    expect(romanNumeralConverter(2)).toBe('II');
  });
  it('should return "III"', () => {
    expect(romanNumeralConverter(3)).toBe('III');
  });
  it('should return "IV"', () => {
    expect(romanNumeralConverter(4)).toBe('IV');
  });
  it('should return "V"', () => {
    expect(romanNumeralConverter(5)).toBe('V');
  });
  it('should return "IX"', () => {
    expect(romanNumeralConverter(9)).toBe('IX');
  });
  it('should return "XII"', () => {
    expect(romanNumeralConverter(12)).toBe('XII');
  });
  it('should return "XVI"', () => {
    expect(romanNumeralConverter(16)).toBe('XVI');
  });
  it('should return "XXIX"', () => {
    expect(romanNumeralConverter(29)).toBe('XXIX');
  });
  it('should return "XLIV"', () => {
    expect(romanNumeralConverter(44)).toBe('XLIV');
  });
  it('should return "XLV"', () => {
    expect(romanNumeralConverter(45)).toBe('XLV');
  });
  it('should return "LXVIII"', () => {
    expect(romanNumeralConverter(68)).toBe('LXVIII');
  });
  it('should return ""LXXXIII"', () => {
    expect(romanNumeralConverter(83)).toBe('LXXXIII');
  });
  it('should return "XCVII"', () => {
    expect(romanNumeralConverter(97)).toBe('XCVII');
  });
  it('should return "XCIX"', () => {
    expect(romanNumeralConverter(99)).toBe('XCIX');
  });
  it('should return "D"', () => {
    expect(romanNumeralConverter(500)).toBe('D');
  });
  it('should return "DI"', () => {
    expect(romanNumeralConverter(501)).toBe('DI');
  });
  it('should return "DCXLIX"', () => {
    expect(romanNumeralConverter(649)).toBe('DCXLIX');
  });
  it('should return "DCCXCVIII"', () => {
    expect(romanNumeralConverter(798)).toBe('DCCXCVIII');
  });
  it('should return "DCCCXCI"', () => {
    expect(romanNumeralConverter(891)).toBe('DCCCXCI');
  });
  it('should return "M"', () => {
    expect(romanNumeralConverter(1000)).toBe('M');
  });
  it('should return "MIV"', () => {
    expect(romanNumeralConverter(1004)).toBe('MIV');
  });
  it('should return "MVI"', () => {
    expect(romanNumeralConverter(1006)).toBe('MVI');
  });
  it('should return "MXXIII"', () => {
    expect(romanNumeralConverter(1023)).toBe('MXXIII');
  });
  it('should return "MMXIV"', () => {
    expect(romanNumeralConverter(2014)).toBe('MMXIV');
  });
  it('should return "MMMCMXCIX"', () => {
    expect(romanNumeralConverter(3999)).toBe('MMMCMXCIX');
  });
});
