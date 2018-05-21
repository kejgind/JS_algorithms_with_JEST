const ceasarsCipher = require('./ceasarsCipher');

describe('Caesars Cipher - One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.', () => {
  it('should return a string', () => {
    expect(ceasarsCipher('SERR PBQR PNZC')).toEqual(expect.any(String));
  });
  it('should return "FREE CODE CAMP"', () => {
    expect(ceasarsCipher('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
  });
  it('should return "FREE PIZZA!"', () => {
    expect(ceasarsCipher('SERR CVMMN!')).toBe('FREE PIZZA!');
  });
  it('should return "FREE LOVE?"', () => {
    expect(ceasarsCipher('SERR YBIR?')).toBe('FREE LOVE?');
  });
  it('should return "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."', () => {
    expect(ceasarsCipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.')).toBe(
      'THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.'
    );
  });
});
