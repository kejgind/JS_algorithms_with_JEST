const argumentsOptional = require('./argumentsOptional');

describe('Arguments Optional - Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.', () => {
  it('should return a number', () => {
    expect(argumentsOptional(2, 3)).toEqual(expect.any(Number));
  });
  it('should return a number', () => {
    expect(argumentsOptional(2)(3)).toEqual(expect.any(Number));
  });
  it('should return 5', () => {
    expect(argumentsOptional(2, 3)).toBe(5);
  });
  it('should return 5', () => {
    expect(argumentsOptional(2)(3)).toBe(5);
  });
  it('should return undefined', () => {
    expect(argumentsOptional('http://bit.ly/IqT6zt')).toBe(undefined);
  });
  it('should return undefined', () => {
    expect(argumentsOptional(2, '3')).toBe(undefined);
  });
  it('should return undefined', () => {
    expect(argumentsOptional(2)([3])).toBe(undefined);
  });
});
