const diffTwoArrays = require('./diffTwoArrays');

describe('Diff Two Arrays - Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.', () => {
  it('should return an array', () => {
    expect(diffTwoArrays([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual(
      expect.any(Array)
    );
  });
  it('should return ["pink wool"]', () => {
    expect(
      diffTwoArrays(
        ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
        ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
      )
    ).toEqual(['pink wool']);
  });
  it('should return ["pink wool", "diorite"]', () => {
    expect(
      diffTwoArrays(
        ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
        ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
      )
    ).toEqual(['pink wool', 'diorite']);
  });
  it('should return []', () => {
    expect(
      diffTwoArrays(
        ['andesite', 'grass', 'dirt', 'dead shrub'],
        ['andesite', 'grass', 'dirt', 'dead shrub']
      )
    ).toEqual([]);
  });
  it('should return [4]', () => {
    expect(diffTwoArrays([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
  });
  it('should return ["piglet", 4]', () => {
    expect(diffTwoArrays([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4])).toEqual([
      'piglet',
      4,
    ]);
  });
  it('should return ["snuffleupagus", "cookie monster", "elmo"]', () => {
    expect(
      diffTwoArrays([], ['snuffleupagus', 'cookie monster', 'elmo'])
    ).toEqual(['snuffleupagus', 'cookie monster', 'elmo']);
  });
  it('should return [1, "calf", 3, "piglet", 7, "filly"]', () => {
    expect(diffTwoArrays([1, 'calf', 3, 'piglet'], [7, 'filly'])).toEqual([
      1,
      'calf',
      3,
      'piglet',
      7,
      'filly',
    ]);
  });
});
