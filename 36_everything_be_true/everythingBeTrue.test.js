const everythingBeTrue = require('./everythingBeTrue');

describe('Everything Be True - Check if the predicate (second argument) is truthy on all elements of a collection (first argument).', () => {
  it('should return a boolean', () => {
    expect(
      everythingBeTrue(
        [
          { user: 'Tinky-Winky', sex: 'male' },
          { user: 'Dipsy', sex: 'male' },
          { user: 'Laa-Laa', sex: 'female' },
          { user: 'Po', sex: 'female' },
        ],
        'sex'
      )
    ).toEqual(expect.any(Boolean));
  });
  it('should return "true"', () => {
    expect(
      everythingBeTrue(
        [
          { user: 'Tinky-Winky', sex: 'male' },
          { user: 'Dipsy', sex: 'male' },
          { user: 'Laa-Laa', sex: 'female' },
          { user: 'Po', sex: 'female' },
        ],
        'sex'
      )
    ).toBe(true);
  });
  it('should return "false"', () => {
    expect(
      everythingBeTrue(
        [
          { user: 'Tinky-Winky', sex: 'male' },
          { user: 'Dipsy' },
          { user: 'Laa-Laa', sex: 'female' },
          { user: 'Po', sex: 'female' },
        ],
        'sex'
      )
    ).toBe(false);
  });
  it('should return "false"', () => {
    expect(
      everythingBeTrue(
        [
          { user: 'Tinky-Winky', sex: 'male', age: 0 },
          { user: 'Dipsy', sex: 'male', age: 3 },
          { user: 'Laa-Laa', sex: 'female', age: 5 },
          { user: 'Po', sex: 'female', age: 4 },
        ],
        'age'
      )
    ).toBe(false);
  });
  it('should return "false"', () => {
    expect(
      everythingBeTrue(
        [
          { name: 'Pete', onBoat: true },
          { name: 'Repeat', onBoat: true },
          { name: 'FastFoward', onBoat: null },
        ],
        'onBoat'
      )
    ).toBe(false);
  });
  it('should return "true"', () => {
    expect(
      everythingBeTrue(
        [
          { name: 'Pete', onBoat: true },
          { name: 'Repeat', onBoat: true, alias: 'Repete' },
          { name: 'FastFoward', onBoat: true },
        ],
        'onBoat'
      )
    ).toBe(true);
  });
  it('should return "true"', () => {
    expect(everythingBeTrue([{ single: 'yes' }], 'single')).toBe(true);
  });
  it('should return "false"', () => {
    expect(
      everythingBeTrue([{ single: '' }, { single: 'double' }], 'single')
    ).toBe(false);
  });
  it('should return "false"', () => {
    expect(
      everythingBeTrue([{ single: 'double' }, { single: undefined }], 'single')
    ).toBe(false);
  });
  it('should return "false"', () => {
    expect(
      everythingBeTrue([{ single: 'double' }, { single: NaN }], 'single')
    ).toBe(false);
  });
});
