const sumFibonacci = num => {
  const fibArr = [];
  for (let i = 0; i <= num; i++) {
    if (i === 0 || i === 1) {
      fibArr.push(1);
    } else if (
      fibArr.length > 1 &&
      i === fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]
    ) {
      fibArr.push(i);
    }
  }
  return fibArr
    .filter(el => (el % 2 !== 0 ? el : ''))
    .reduce((acc, cur) => acc + cur, 0);
};

module.exports = sumFibonacci;
