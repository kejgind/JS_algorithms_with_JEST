const titleCase = str =>
  str
    .toLowerCase()
    .split(' ')
    .map(word =>
      word
        .slice(0, 1)
        .toUpperCase()
        .concat(word.slice(1))
    )
    .join(' ');

module.exports = titleCase;
