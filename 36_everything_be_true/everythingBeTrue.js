const everythingBeTrue = (collection, pre) =>
  collection.length ===
  collection.map(el => (el[pre] ? true : false)).filter(el => el).length
    ? true
    : false;

module.exports = everythingBeTrue;
