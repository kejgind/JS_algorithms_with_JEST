const validatePhoneNum = require('./validatePhoneNum');

describe('Validate US Telephone Numbers - Return "true" if the passed string is a valid US phone number.', () => {
  it('should return a boolean', () => {
    expect(validatePhoneNum('555-555-5555')).toEqual(expect.any(Boolean));
  });
  it('should return true', () => {
    expect(validatePhoneNum('1 555-555-5555')).toBe(true);
  });
  it('should return true', () => {
    expect(validatePhoneNum('1 (555) 555-5555')).toBe(true);
  });
  it('should return true', () => {
    expect(validatePhoneNum('5555555555')).toBe(true);
  });
  it('should return true', () => {
    expect(validatePhoneNum('555-555-5555')).toBe(true);
  });
  it('should return true', () => {
    expect(validatePhoneNum('(555)555-5555')).toBe(true);
  });
  it('should return true', () => {
    expect(validatePhoneNum('1(555)555-5555')).toBe(true);
  });
  it('should return false', () => {
    expect(validatePhoneNum('555-5555')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('5555555')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('1 555)555-5555')).toBe(false);
  });
  it('should return true', () => {
    expect(validatePhoneNum('1 555 555 5555')).toBe(true);
  });
  it('should return true', () => {
    expect(validatePhoneNum('1 456 789 4444')).toBe(true);
  });
  it('should return false', () => {
    expect(validatePhoneNum('123**&!!asdf#')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('55555555')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('(6505552368)')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('2 (757) 622-7382')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('0 (757) 622-7382')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('-1 (757) 622-7382')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('2 757 622-7382')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('10 (757) 622-7382')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('27576227382')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('(275)76227382')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('2(757)6227382')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('2(757)622-7382')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('555)-555-5555')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('(555-555-5555')).toBe(false);
  });
  it('should return false', () => {
    expect(validatePhoneNum('(555)5(55?)-5555')).toBe(false);
  });
});
