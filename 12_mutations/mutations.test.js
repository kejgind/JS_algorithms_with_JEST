const mutations = require('./mutations');

describe('Mutations - Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.', () => {
  it('should return "boolean"', () => {
    expect(mutations(['hello', 'hey'])).toEqual(expect.any(Boolean));
  });
  it('should return "false"', () => {
    expect(mutations(['hello', 'hey'])).toBe(false);
  });
  it('should return "true"', () => {
    expect(mutations(['hello', 'Hello'])).toBe(true);
  });
  it('should return "true"', () => {
    expect(mutations(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])).toBe(true);
  });
  it('should return "true"', () => {
    expect(mutations(['Mary', 'Army'])).toBe(true);
  });
  it('should return "true"', () => {
    expect(mutations(['Mary', 'Aarmy'])).toBe(true);
  });
  it('should return "true"', () => {
    expect(mutations(['Alien', 'line'])).toBe(true);
  });
  it('should return "true"', () => {
    expect(mutations(['floor', 'for'])).toBe(true);
  });
  it('should return "false"', () => {
    expect(mutations(['hello', 'neo'])).toBe(false);
  });
  it('should return "false"', () => {
    expect(mutations(['voodoo', 'no'])).toBe(false);
  });
});
