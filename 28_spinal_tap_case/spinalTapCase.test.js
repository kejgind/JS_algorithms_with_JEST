const spinalTapCase = require('./spinalTapCase');

describe('Spinal Tap Case - Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.', () => {
  it('should return a string', () => {
    expect(spinalTapCase('This Is Spinal Tap')).toEqual(expect.any(String));
  });
  it('should return "this-is-spinal-tap"', () => {
    expect(spinalTapCase('This Is Spinal Tap')).toBe('this-is-spinal-tap');
  });
  it('should return "this-is-spinal-tap"', () => {
    expect(spinalTapCase('thisIsSpinalTap')).toBe('this-is-spinal-tap');
  });
  it('should return "the-andy-griffith-show"', () => {
    expect(spinalTapCase('The_Andy_Griffith_Show')).toBe(
      'the-andy-griffith-show'
    );
  });
  it('should return "teletubbies-say-eh-oh"', () => {
    expect(spinalTapCase('Teletubbies say Eh-oh')).toBe(
      'teletubbies-say-eh-oh'
    );
  });
  it('should return "all-the-small-things"', () => {
    expect(spinalTapCase('AllThe-small Things')).toBe('all-the-small-things');
  });
});
