let reverseString = str => typeof str === 'string' ? str.split('').reverse().join('') : null;

// eslint-disable-next-line no-console
console.log(reverseString('Greetings from Earth'));

module.exports = reverseString;
