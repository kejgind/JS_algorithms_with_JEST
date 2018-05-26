const spinalTapCase = str =>
  str
    .split('')
    .map(
      (el, idx) =>
        el === el.toUpperCase() && idx !== 0 ? el.replace(el, `-${el}`) : el
    )
    .join('')
    .replace(/ /g, '-')
    .replace(/_/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();

module.exports = spinalTapCase;
