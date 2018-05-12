let factorialize = num => {
  if(typeof num === 'number' && num >= 0) {
    return num === 0 ? 1 : num * factorialize(num-1);
  } else {
    return null;
  }
};

module.exports = factorialize;