const booWho = require('./booWho');

describe('Boo who - Check if a value is classified as a boolean primitive. Return true or false.', () => {
  it('should return boolean', () => {
    expect(booWho(true)).toEqual(expect.any(Boolean));
  });
  it('should return true', () => {
    expect(booWho(true)).toBe(true);
  });
  it('should return true', () => {
    expect(booWho(false)).toBe(true);
  });
  it('should return false', () => {
    expect(booWho([1, 2, 3])).toBe(false);
  });
  it('should return false', () => {
    expect(booWho([].slice)).toBe(false);
  });
  it('should return false', () => {
    expect(booWho({ a: 1 })).toBe(false);
  });
  it('should return false', () => {
    expect(booWho(1)).toBe(false);
  });
  it('should return false', () => {
    expect(booWho(NaN)).toBe(false);
  });
  it('should return false', () => {
    expect(booWho('a')).toBe(false);
  });
  it('should return false', () => {
    expect(booWho('true')).toBe(false);
  });
  it('should return false', () => {
    expect(booWho('false')).toBe(false);
  });
});
