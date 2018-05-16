const largestNumArr = arr => arr.map(el => el.sort((a, b) => b - a)[0]);

module.exports = largestNumArr;
