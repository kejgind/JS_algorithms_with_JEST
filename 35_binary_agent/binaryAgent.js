const binaryAgent = str =>
  str
    .split(' ')
    .map(el => String.fromCharCode(parseInt(el, 2)))
    .join('');

module.exports = binaryAgent;
