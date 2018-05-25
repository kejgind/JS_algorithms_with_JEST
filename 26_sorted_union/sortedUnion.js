const sortedUnion = function(arr) {
  return [...arguments]
    .reduce((acc, cur) => acc.concat(cur), [])
    .filter((el, idx, arr) => (arr.indexOf(el) === idx ? el : ''));
};

module.exports = sortedUnion;
