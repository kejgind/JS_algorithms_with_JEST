const sumFibonacci = require('./sumFibonacci');

describe('Sum All Odd Fibonacci Numbers - Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.', () => {
  it('should return a number', () => {
    expect(sumFibonacci(1)).toEqual(expect.any(Number));
  });
  it('should return 1785', () => {
    expect(sumFibonacci(1000)).toBe(1785);
  });
  it('should return 4613732', () => {
    expect(sumFibonacci(4000000)).toBe(4613732);
  });
  it('should return 5', () => {
    expect(sumFibonacci(4)).toBe(5);
  });
  it('should return 60696', () => {
    expect(sumFibonacci(75024)).toBe(60696);
  });
  it('should return 135721', () => {
    expect(sumFibonacci(75025)).toBe(135721);
  });
});
