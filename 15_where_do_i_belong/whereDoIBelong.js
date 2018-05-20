const whereDoIBelong = (arr, num) =>
  [...arr, num].sort((a, b) => a - b).indexOf(num);

module.exports = whereDoIBelong;
