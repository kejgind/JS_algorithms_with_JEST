const whereDoIBelong = require('./whereDoIBelong');

describe('Where do I belong - Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.', () => {
  it('should return a number', () => {
    expect(whereDoIBelong([40, 60], 50)).toEqual(expect.any(Number));
  });
  it('should return "3"', () => {
    expect(whereDoIBelong([10, 20, 30, 40, 50], 35)).toBe(3);
  });
  it('should return "2"', () => {
    expect(whereDoIBelong([10, 20, 30, 40, 50], 30)).toBe(2);
  });
  it('should return "1"', () => {
    expect(whereDoIBelong([40, 60], 50)).toBe(1);
  });
  it('should return "0"', () => {
    expect(whereDoIBelong([3, 10, 5], 3)).toBe(0);
  });
  it('should return "2"', () => {
    expect(whereDoIBelong([5, 3, 20, 3], 5)).toBe(2);
  });
  it('should return "2"', () => {
    expect(whereDoIBelong([2, 20, 10], 19)).toBe(2);
  });
  it('should return "3"', () => {
    expect(whereDoIBelong([2, 5, 10], 15)).toBe(3);
  });
});
