const dropIt = (arr, func) => {
  const cutIdx = arr.map(el => func(el)).indexOf(true);
  return cutIdx === -1 ? (arr = []) : (arr = arr.slice(cutIdx));
};

module.exports = dropIt;
