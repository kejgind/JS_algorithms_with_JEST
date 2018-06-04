const exactChange = (price, cash, cid) => {
  // A value for each single coin and bill
  const units = [
    ['PENNY', 0.01],
    ['NICKEL', 0.05],
    ['DIME', 0.1],
    ['QUARTER', 0.25],
    ['ONE', 1.0],
    ['FIVE', 5.0],
    ['TEN', 10.0],
    ['TWENTY', 20.0],
    ['ONE HUNDRED', 100.0],
  ];
  // Function that corrects rounding error due to floating-number
  const round = (number, precision) => {
    const shift = (number, exponent) => {
      let numArray = ('' + number).split('e');
      return +(
        numArray[0] +
        'e' +
        (numArray[1] ? +numArray[1] + exponent : exponent)
      );
    };
    return shift(Math.round(shift(number, +precision)), -precision);
  };
  // Check amount of change
  const change = round(cash - price, 2);
  // Check amount of money in cash-register
  const registerMoney = round(cid.reduce((acc, cur) => acc + cur[1], 0), 2);
  // Create object with coin/bill names and amount of each in cash register
  const money = {};
  units.forEach(element => {
    money[element[0]] = element[1];
  });
  // Check if change and amount of money in cash register is equal
  if (change === registerMoney) {
    return 'Closed';
  } else {
    // Combine "units" array with count of each coin/bill in cash register
    const registerEachCount = units.map((el, idx) =>
      el.concat(round(cid[idx][1] / el[1], 0))
    );
    // Create array with each coin/bill in cash register
    const registerMoneyLong = [];
    registerEachCount.forEach(el =>
      registerMoneyLong.push(...Array(el[2]).fill(el[1]))
    );
    // Create array with coin/bill for change
    const handFullOfChange = [];
    registerMoneyLong.reduceRight((acc, cur) => {
      if (acc > 0 && cur <= acc) {
        handFullOfChange.push(cur);
        return round(acc - cur, 2);
      }
      return acc;
    }, change);
    // Count change
    const countedChange = round(
      handFullOfChange.reduce((acc, cur) => acc + cur),
      2
    );
    // Compare change needed to counted change
    if (change !== countedChange) {
      return 'Insufficient Funds';
    }
    // Count each coin/bill
    const sortedChange = {};
    handFullOfChange.forEach(
      x => (sortedChange[x] = (sortedChange[x] || 0) + 1)
    );
    const changeToGive = [];
    for (let greens in money) {
      if (sortedChange.hasOwnProperty(money[greens])) {
        changeToGive.push([greens, money[greens]]);
      }
    }
    const sortedChangeToGive = [];
    Object.getOwnPropertyNames(sortedChange).forEach(el => {
      sortedChangeToGive.push([parseFloat(el), sortedChange[el]]);
    });
    sortedChangeToGive.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < changeToGive.length; i++) {
      if (changeToGive[i][1] === sortedChangeToGive[i][0]) {
        changeToGive[i][1] =
          changeToGive[i][1] * 100 * (sortedChangeToGive[i][1] * 100) / 10000;
      }
    }
    return changeToGive.reverse();
  }
};

module.exports = exactChange;
