const falsyBouncer = arr => arr.filter(el => (el ? el : ''));

module.exports = falsyBouncer;
