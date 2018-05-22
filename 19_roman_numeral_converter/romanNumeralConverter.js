const romanNumeralConverter = num => {
  const romanNumbers = [
    ['', 'M', 'MM', 'MMM'],
    ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  ];

  const numArr = num.toString().split('');
  return [...Array(4 - numArr.length).fill('0'), ...numArr]
    .map((el, idx) => romanNumbers[idx][el])
    .join('');
};

module.exports = romanNumeralConverter;

/**
 * converter works only for numbers from 1 to 3999
 *
 * Roman numerals symbols:
 * I - 1,
 * V - 5,
 * X - 10,
 * L - 50,
 * C - 100,
 * D - 500,
 * M - 1000,
 */
