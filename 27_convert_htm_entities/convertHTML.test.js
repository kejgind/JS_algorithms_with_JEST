const convertHTML = require('./convertHTML');

describe('Convert HTML Entities', () => {
  it('should return a string', () => {
    expect(convertHTML('Dolce & Gabbana')).toEqual(expect.any(String));
  });
  it('should return "Dolce &amp; Gabbana"', () => {
    expect(convertHTML('Dolce & Gabbana')).toBe('Dolce &amp; Gabbana');
  });
  it('should return "Hamburgers &lt; Pizza &lt; Tacos"', () => {
    expect(convertHTML('Hamburgers < Pizza < Tacos')).toBe(
      'Hamburgers &lt; Pizza &lt; Tacos'
    );
  });
  it('should return "Sixty &gt; twelve"', () => {
    expect(convertHTML('Sixty > twelve')).toBe('Sixty &gt; twelve');
  });
  it('should return "Stuff in &quot;quotation marks&quot;"', () => {
    expect(convertHTML('Stuff in "quotation marks"')).toBe(
      'Stuff in &quot;quotation marks&quot;'
    );
  });
  it('should return "Shindler&apos;s List"', () => {
    expect(convertHTML('Shindler\'s List')).toBe('Shindler&apos;s List');
  });
  it('should return "&lt;&gt;"', () => {
    expect(convertHTML('<>')).toBe('&lt;&gt;');
  });
  it('should return "abc"', () => {
    expect(convertHTML('abc')).toBe('abc');
  });
});
