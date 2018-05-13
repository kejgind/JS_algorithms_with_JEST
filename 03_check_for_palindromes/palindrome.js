const palindrome = (str) => {
  let clearStr = str.toLowerCase().replace(/([^a-z0-9])+/g, '');
  let reversedStr = clearStr.split('').reverse().join('');

  return clearStr === reversedStr ? true : false;
};

module.exports = palindrome;
