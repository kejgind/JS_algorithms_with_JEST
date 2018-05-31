const argumentsOptional = function() {
  const firstArg = [...arguments];
  if (firstArg.length === 1 && typeof firstArg[0] === 'number') {
    return function sumTwoAnd() {
      const secondArg = [...arguments];
      return typeof secondArg[0] === 'number'
        ? firstArg[0] + secondArg[0]
        : undefined;
    };
  } else if (
    firstArg.length === 2 &&
    typeof firstArg[0] === 'number' &&
    typeof firstArg[1] === 'number'
  ) {
    return firstArg[0] + firstArg[1];
  }
  return undefined;
};

module.exports = argumentsOptional;
