const palindrome = require('./palindrome');
describe('Check for Palindromes', () => {
  it('should return a "boolean"', () => {
    expect(palindrome('eye')).toEqual(expect.any(Boolean));
  });
  it('should return "true" for "eye".', () => {
    expect(palindrome('eye')).toBe(true);
  });
  
  it('should return "true" for "_eye".', () => {
    expect(palindrome('_eye')).toBe(true);
  });
  
  it('should return "true" for "race car".', () => {
    expect(palindrome('race car')).toBe(true);
  });
  
  it('should return "false" for "not a palindrome".', () => {
    expect(palindrome('not a palindrome')).toBe(false);
  });
  
  it('should return "true" for "A man, a plan, a canal. Panama".', () => {
    expect(palindrome('A man, a plan, a canal. Panama')).toBe(true);
  });
  
  it('should return "true" for "never odd or even".', () => {
    expect(palindrome('never odd or even')).toBe(true);
  });
  
  it('should return "false" for "nope".', () => {
    expect(palindrome('nope')).toBe(false);
  });
  
  it('should return "false" for "almostomla".', () => {
    expect(palindrome('almostomla')).toBe(false);
  });
  
  it('should return "true" for "My age is 0, 0 si ega ym".', () => {
    expect(palindrome('My age is 0, 0 si ega ym')).toBe(true);
  });
  
  it('should return "false" for "1 eye for of 1 eye.".', () => {
    expect(palindrome('1 eye for of 1 eye.')).toBe(false);
  });
  
  it('should return "true" for "0_0 (: /-\\ :) 0-0".', () => {
    expect(palindrome('0_0 (: /-\\ :) 0-0')).toBe(true);
  });
  
  it('should return "false" for "five|\\_/|four".', () => {
    expect(palindrome('five|\\_/|four')).toBe(false);
  });
});

