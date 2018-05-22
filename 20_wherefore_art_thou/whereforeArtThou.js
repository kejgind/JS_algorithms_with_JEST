const whereforeArtThou = (collection, source) =>
  collection.filter(el => {
    let checkArr = [];
    for (let eKey in el) {
      for (let sKey in source) {
        eKey === sKey && el[eKey] === source[sKey] ? checkArr.push(true) : '';
      }
    }
    return Object.keys(source).length === checkArr.length ? true : '';
  });

module.exports = whereforeArtThou;
