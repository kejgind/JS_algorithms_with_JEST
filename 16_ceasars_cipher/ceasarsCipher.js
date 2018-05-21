const ceasarsCipher = str =>
  str
    .split('')
    .map(el => {
      let a = el.charCodeAt();
      if (a < 65 || a > 90) {
        return String.fromCharCode(a);
      } else if (a >= 65 && a <= 77) {
        return String.fromCharCode((a = a + 13));
      } else {
        return String.fromCharCode((a = 65 + (12 - (90 - a))));
      }
    })
    .join('');

module.exports = ceasarsCipher;

// charCodes -> A - 65 | Z - 90
