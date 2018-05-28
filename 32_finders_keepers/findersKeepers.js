const findersKeepers = (arr, func) => arr.filter(el => func(el))[0];

module.exports = findersKeepers;
