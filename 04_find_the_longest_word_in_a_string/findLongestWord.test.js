const findLongestWord = require('./findLongestWord');

describe('Find the Longest Word in a String', () => {
  it('should return a number.', () => {
    expect(findLongestWord('The quick brown fox jumped over the lazy dog')).toEqual(expect.any(Number));
  });  
  it('should return 6 for longest word length in provided sentence.', () => {
    expect(findLongestWord('The quick brown fox jumped over the lazy dog')).toBe(6);
  });  
  it('should return 5 for longest word length in provided sentence.', () => {
    expect(findLongestWord('May the force be with you')).toBe(5);
  });  
  it('should return 6 for longest word length in provided sentence.', () => {
    expect(findLongestWord('Google do a barrel roll')).toBe(6);
  });  
  it('should return 8 for longest word length in provided sentence.', () => {
    expect(findLongestWord('What is the average airspeed velocity of an unladen swallow')).toBe(8);
  });  
  it('should return 19 for longest word length in provided sentence.', () => {
    expect(findLongestWord('What if we try a super-long word such as otorhinolaryngology')).toBe(19);
  });
});
