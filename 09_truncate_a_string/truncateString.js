const truncateString = (str, num) =>
  num <= 3
    ? str.substr(0, num).concat('...')
    : str.length <= num
      ? str
      : str.substr(0, num - 3).concat('...');

module.exports = truncateString;
