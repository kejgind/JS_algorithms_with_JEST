const searchAndReplace = (str, before, after) =>
  str.replace(
    before,
    before[0] === before[0].toUpperCase()
      ? `${after[0].toUpperCase()}${after.slice(1)}`
      : `${after[0].toLowerCase()}${after.slice(1)}`
  );

module.exports = searchAndReplace;
