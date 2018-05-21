const sumAllNumbers = require('./sumAllNumbers');

describe('Sum All Numbers in a Range - We\'ll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.', () => {
  it('should return a "number"', () => {
    expect(sumAllNumbers([1, 4])).toEqual(expect.any(Number));
  });
  it('should return 10', () => {
    expect(sumAllNumbers([1, 4])).toBe(10);
  });
  it('should return 10', () => {
    expect(sumAllNumbers([4, 1])).toBe(10);
  });
  it('should return 45', () => {
    expect(sumAllNumbers([5, 10])).toBe(45);
  });
  it('should return 45', () => {
    expect(sumAllNumbers([10, 5])).toBe(45);
  });
});
