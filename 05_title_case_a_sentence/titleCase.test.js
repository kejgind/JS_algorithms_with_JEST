const titleCase = require('./titleCase');

describe('Title Case a Sentence', () => {
  it('should return a string.', () => {
    expect(titleCase('I\'m a little tea pot')).toEqual(expect.any(String));
  });
  it('should return "I\'m A Little Tea Pot" for "I\'m a little tea pot".', () => {
    expect(titleCase('I\'m a little tea pot')).toBe('I\'m A Little Tea Pot');
  });
  it('should should return "Short And Stout" for "sHoRt AnD sToUt".', () => {
    expect(titleCase('sHoRt AnD sToUt')).toBe('Short And Stout');
  });
  it('should return "Here Is My Handle Here Is My Spout" for "HERE IS MY HANDLE HERE IS MY SPOUT".', () => {
    expect(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).toBe(
      'Here Is My Handle Here Is My Spout'
    );
  });
});
