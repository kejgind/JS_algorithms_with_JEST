const findersKeepers = require('./findersKeepers');

describe('Finders Keepers - Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).', () => {
  it('should return a num', () => {
    expect(
      findersKeepers([1, 3, 5, 8, 9, 10], function(num) {
        return num % 2 === 0;
      })
    ).toEqual(expect.any(Number));
  });
  it('should return an undefined', () => {
    expect(
      findersKeepers([1, 3, 5, 9], function(num) {
        return num % 2 === 0;
      })
    ).toBe(undefined);
  });
  it('should return 8', () => {
    expect(
      findersKeepers([1, 3, 5, 8, 9, 10], function(num) {
        return num % 2 === 0;
      })
    ).toBe(8);
  });
});
