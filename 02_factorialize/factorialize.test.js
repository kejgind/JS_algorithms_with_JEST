const factorialize = require('./factorialize');

describe('Factorialize a number', () => {
  it('should return null if object is given', () => {
    expect(factorialize({})).toBe(null);
  });
  it('should return null if array is given', () => {
    expect(factorialize([])).toBe(null);
  });
  it('should return null if string is given', () => {
    expect(factorialize('123')).toBe(null);
  });
  it('should return null if negative number is given', () => {
    expect(factorialize(-5)).toBe(null);
  });
  it('should return a number if number is given', () => {
    expect(factorialize(5)).toEqual(expect.any(Number));
  });
  it('should return 120 if given number is 5', () => {
    expect(factorialize(5)).toBe(120);
  });
  it('should return 1 if given number is 0', () => {
    expect(factorialize(0)).toBe(1);
  });
  it('should return 3628800 if given number is 10', () => {
    expect(factorialize(10)).toBe(3628800);
  });
  it('should return 2432902008176640000 if given number is 20', () => {
    expect(factorialize(20)).toBe(2432902008176640000);
  });
});
