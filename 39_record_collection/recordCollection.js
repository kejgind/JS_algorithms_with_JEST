// Setup
const collection = {
  '2548': {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  '2468': {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  '1245': {
    artist: 'Robert Palmer',
    tracks: [],
  },
  '5439': {
    album: 'ABBA Gold',
  },
};

const recordCollection = (id, prop, value) => {
  !collection[`${id}`].hasOwnProperty(prop)
    ? prop === 'tracks'
      ? (collection[`${id}`][prop] = [value])
      : (collection[`${id}`][prop] = value)
    : value.length === 0
      ? delete collection[`${id}`][prop]
      : typeof collection[`${id}`][prop] === 'string'
        ? (collection[`${id}`][prop] = value)
        : collection[`${id}`][prop].push(value);
  return collection;
};

module.exports = recordCollection;
