const sumAllNumbers = arr =>
  [...Array(Math.max(...arr) - Math.min(...arr) + 1)]
    .map((el, idx) => (el = Math.min(...arr) + idx))
    .reduce((acc, cur) => acc + cur, 0);

module.exports = sumAllNumbers;
