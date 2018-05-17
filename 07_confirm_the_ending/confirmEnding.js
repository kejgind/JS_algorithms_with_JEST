const confirmEnding = (str, target) =>
  str.substr(-target.length) === target ? true : false;

module.exports = confirmEnding;
