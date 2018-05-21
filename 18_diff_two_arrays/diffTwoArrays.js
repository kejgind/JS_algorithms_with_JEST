const diffTwoArrays = (arr1, arr2) =>
  [...arr1, ...arr2].filter(
    el =>
      (arr1.indexOf(el) === -1 && arr2.indexOf(el) !== -1) ||
      (arr1.indexOf(el) !== -1 && arr2.indexOf(el) === -1)
        ? el
        : ''
  );

module.exports = diffTwoArrays;
