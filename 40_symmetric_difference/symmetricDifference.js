const symmetricDifference = function(args) {
  const removeDuplicates = [...arguments].map(el =>
    el.filter((el, idx, arr) => (arr.indexOf(el) === idx ? el : ''))
  );
  const symDiff = removeDuplicates
    .reduce((acc, cur) =>
      [...acc, ...cur].filter(
        el =>
          (acc.indexOf(el) === -1 && cur.indexOf(el) !== -1) ||
          (acc.indexOf(el) !== -1 && cur.indexOf(el) === -1)
            ? el
            : ''
      )
    )
    .sort((a, b) => a - b);
  return symDiff;
};

module.exports = symmetricDifference;
