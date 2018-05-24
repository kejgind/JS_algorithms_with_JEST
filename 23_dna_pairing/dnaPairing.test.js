const dnaPairing = require('./dnaPairing');

describe('DNA Pairing - The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.', () => {
  it('should return a 2d array', () => {
    expect(dnaPairing('AT')).toEqual(expect.any(Array));
  });

  it('should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]', () => {
    expect(dnaPairing('ATCGA')).toEqual([
      ['A', 'T'],
      ['T', 'A'],
      ['C', 'G'],
      ['G', 'C'],
      ['A', 'T'],
    ]);
  });
  it('should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]', () => {
    expect(dnaPairing('TTGAG')).toEqual([
      ['T', 'A'],
      ['T', 'A'],
      ['G', 'C'],
      ['A', 'T'],
      ['G', 'C'],
    ]);
  });
  it('should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]', () => {
    expect(dnaPairing('CTCTA')).toEqual([
      ['C', 'G'],
      ['T', 'A'],
      ['C', 'G'],
      ['T', 'A'],
      ['A', 'T'],
    ]);
  });
});
