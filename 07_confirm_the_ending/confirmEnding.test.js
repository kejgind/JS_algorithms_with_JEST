const confirmEnding = require('./confirmEnding');

describe('Confirm the Ending', () => {
  it('should return a "boolean"', () => {
    expect(confirmEnding('Bastian', 'n')).toEqual(expect.any(Boolean));
  });

  it('should return "true" for ("Bastian", "n")', () => {
    expect(confirmEnding('Bastian', 'n')).toBe(true);
  });
  it('should return "false" for ("Connor", "n")', () => {
    expect(confirmEnding('Connor', 'n')).toBe(false);
  });
  it('should return "false" for ("Walking on water and developing software from a specification are easy if both are frozen","specification")', () => {
    expect(
      confirmEnding(
        'Walking on water and developing software from a specification are easy if both are frozen',
        'specification'
      )
    ).toBe(false);
  });
  it('should return "true" for ("He has to give me a new name", "name")', () => {
    expect(confirmEnding('He has to give me a new name', 'name')).toBe(true);
  });
  it('should return "true" for ("Open sesame", "same")', () => {
    expect(confirmEnding('Open sesame', 'same')).toBe(true);
  });
  it('should return "false" for ("Open sesame", "pen")', () => {
    expect(confirmEnding('Open sesame', 'pen')).toBe(false);
  });
  it('should return "false" for ("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")', () => {
    expect(
      confirmEnding(
        'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
        'mountain'
      )
    ).toBe(false);
  });
});
// });
