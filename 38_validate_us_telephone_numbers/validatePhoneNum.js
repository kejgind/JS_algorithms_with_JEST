const validatePhoneNum = str => {
  // regEx created with gerat tool from https://regex101.com/
  const regEx = /^1? ?(\([0-9]{3}\)|[0-9]{3})( |-)?[0-9]{3}( |-)?[0-9]{4}$/;
  return regEx.test(str) ? true : false;
};

module.exports = validatePhoneNum;
