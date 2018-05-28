const smallestCommon = arr => {
  // Create an array off all numbers in given range
  const numArr = [...Array(Math.max(...arr) - Math.min(...arr) + 1)].map(
    (el, idx) => (el = Math.min(...arr) + idx)
  );
  // Base greatest common divisor (GCD) function
  const gcd = (a, b) => {
    while (a !== b) {
      a > b ? (a = a - b) : (b = b - a);
    }
    return a;
  };
  // Base least common multiple (LCM) function using GCD
  const lcm = (a, b) => a * b / gcd(a, b);
  // LCM for multiple numbers (given array)
  const lcmNumArr = entryArr => entryArr.reduce((acc, cur) => lcm(acc, cur));

  // Return LCM for given array
  return lcmNumArr(numArr);
};

module.exports = smallestCommon;
