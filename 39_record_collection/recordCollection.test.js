const recordCollection = require('./recordCollection');

describe('Record Collection - You are given a JSON object representing a part of your musical album collection. Each album has several properties and a unique id number as its key. Not all albums have complete information.', () => {
  it('should add artist "ABBA" to collection "5439"', () => {
    expect(recordCollection(5439, 'artist', 'ABBA')['5439']).toHaveProperty(
      'artist',
      'ABBA'
    );
  });
  it('should add track "Take a Chance on Me" to collection "5439"', () => {
    expect(
      recordCollection(5439, 'tracks', 'Take a Chance on Me')['5439']
    ).toHaveProperty('tracks', ['Take a Chance on Me']);
  });
  it('should set artist as an empty string for collection "2548" ', () => {
    expect(recordCollection(2548, 'artist', '')['2548']).not.toHaveProperty(
      'artist'
    );
  });
  it('should add track "Addicted to Love" as last element in tracks array to collection "1245"', () => {
    expect(
      recordCollection(1245, 'tracks', 'Addicted to Love')['1245']
    ).toHaveProperty('tracks', ['Addicted to Love']);
  });
  it('should add track "Free" as last element in tracks array to collection "2468"', () => {
    expect(recordCollection(2468, 'tracks', 'Free')['2468']).toHaveProperty(
      'tracks',
      ['1999', 'Little Red Corvette', 'Free']
    );
  });
  it('should set tracks as an empty array in collection "2548"', () => {
    expect(recordCollection(2548, 'tracks', '')['2548']).not.toHaveProperty(
      'tracks'
    );
  });
});
