const pigLatin = require('./pigLatin');

describe('Pig Latin - Translate the provided string to pig latin.', () => {
  it('should return a string', () => {
    expect(pigLatin('california')).toEqual(expect.any(String));
  });
  it('should return "aliforniacay"', () => {
    expect(pigLatin('california')).toBe('aliforniacay');
  });
  it('should return "aragraphspay"', () => {
    expect(pigLatin('paragraphs')).toBe('aragraphspay');
  });
  it('should return "oveglay"', () => {
    expect(pigLatin('glove')).toBe('oveglay');
  });
  it('should return "algorithmway"', () => {
    expect(pigLatin('algorithm')).toBe('algorithmway');
  });
  it('should return "eightway"', () => {
    expect(pigLatin('eight')).toBe('eightway');
  });
});
