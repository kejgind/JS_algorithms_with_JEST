const findLongestWord = str =>
  str
    .split(' ')
    .map(word => word.length)
    .sort((a, b) => b - a)[0];

module.exports = findLongestWord;
