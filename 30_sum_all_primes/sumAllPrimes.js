const sumAllPrimes = num => {
  let sArr = [...Array(num - 1)].map((el, idx) => idx + 2);
  for (let i = 0; i <= sArr.length - 1; i++) {
    sArr = sArr.filter(el => el === sArr[i] || el % sArr[i] !== 0);
  }
  return sArr.reduce((acc, cur) => acc + cur);
};

module.exports = sumAllPrimes;
