const chunkyMonkey = (arr, size) =>
  [...Array(size > 0 ? Math.ceil(arr.length / size) : '')].map(() =>
    arr.splice(0, size)
  );

module.exports = chunkyMonkey;
