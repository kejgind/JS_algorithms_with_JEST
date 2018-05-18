// with String.repeat()
const repeatString = (str, num) => (num <= 0 ? '' : str.repeat(num));

// without String.repeat()
const repeatString2 = (str, num) =>
  num <= 0 ? '' : [...Array(num)].fill(str).join('');

module.exports = repeatString;
