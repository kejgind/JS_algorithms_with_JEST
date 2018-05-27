const sumAllPrimes = require('./sumAllPrimes');

describe('Sum All Primes - Sum all the prime numbers up to and including the provided number.', () => {
  it('should return a number', () => {
    expect(sumAllPrimes(10)).toEqual(expect.any(Number));
  });
  it('should return 17', () => {
    expect(sumAllPrimes(10)).toEqual(17);
  });
  it('should return 73156', () => {
    expect(sumAllPrimes(977)).toEqual(73156);
  });
});
