const truncateString = require('./truncateString');

describe('Truncate a string', () => {
  it('should return a string', () => {
    expect(truncateString('A-', 1)).toEqual(expect.any(String));
  });
  it('should return "A-tisket..."', () => {
    expect(
      truncateString('A-tisket a-tasket A green and yellow basket', 11)
    ).toBe('A-tisket...');
  });
  it('should return "Peter Piper..."', () => {
    expect(
      truncateString('Peter Piper picked a peck of pickled peppers', 14)
    ).toBe('Peter Piper...');
  });
  it('should return "A-tisket a-tasket A green and yellow basket"', () => {
    expect(
      truncateString(
        'A-tisket a-tasket A green and yellow basket',
        'A-tisket a-tasket A green and yellow basket'.length
      )
    ).toBe('A-tisket a-tasket A green and yellow basket');
  });
  it('should return "A-tisket a-tasket A green and yellow basket"', () => {
    expect(
      truncateString(
        'A-tisket a-tasket A green and yellow basket',
        'A-tisket a-tasket A green and yellow basket'.length + 2
      )
    ).toBe('A-tisket a-tasket A green and yellow basket');
  });
  it('should return "A..."', () => {
    expect(truncateString('A-', 1)).toBe('A...');
  });
  it('should return "Ab..."', () => {
    expect(truncateString('Absolutely Longer', 2)).toBe('Ab...');
  });
});
