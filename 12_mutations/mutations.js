const mutations = arr =>
  [...arr[1].toLowerCase()]
    .map(el => arr[0].toLowerCase().indexOf(el) !== -1)
    .indexOf(false) === -1
    ? true
    : false;

module.exports = mutations;
