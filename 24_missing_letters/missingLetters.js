const missingLetters = str => {
  let letter = '';
  for (let i = 0; i < str.length; i++) {
    str.charCodeAt(i + 1) - str.charCodeAt(i) > 1
      ? (letter += String.fromCharCode(str.charCodeAt(i) + 1))
      : '';
  }
  return letter.length === 0 ? (letter = undefined) : letter;
};

module.exports = missingLetters;
