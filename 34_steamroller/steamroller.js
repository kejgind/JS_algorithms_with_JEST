const steamroller = arr => {
  const flatArr = [];
  const pressIt = array => {
    array.forEach(el => (Array.isArray(el) ? pressIt(el) : flatArr.push(el)));
  };
  pressIt(arr);
  return flatArr;
};

module.exports = steamroller;

steamroller([[['a']], [['b']]]);
steamroller([1, [2], [3, [[4]]]]);
steamroller([1, [], [3, [[4]]]]);
steamroller([1, {}, [3, [[4]]]]);
