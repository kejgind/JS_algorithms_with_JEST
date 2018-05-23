const pigLatin = str => {
  const a = str.search(/[aeiouy]/);
  return a === 0 ? str + 'way' : str.slice(a) + str.slice(0, a) + 'ay';
};

module.exports = pigLatin;
