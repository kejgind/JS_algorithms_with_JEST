const steamroller = require('./steamroller');

describe('Steamroller - Flatten a nested array. You must account for varying levels of nesting.', () => {
  it('shoule return an array', () => {
    expect(steamroller([[['a']], [['b']]])).toEqual(expect.any(Array));
  });
  it('shoule return ["a", "b"]', () => {
    expect(steamroller([[['a']], [['b']]])).toEqual(['a', 'b']);
  });
  it('shoule return [1, 2, 3, 4]', () => {
    expect(steamroller([1, [2], [3, [[4]]]])).toEqual([1, 2, 3, 4]);
  });
  it('shoule return [1, 3, 4]', () => {
    expect(steamroller([1, [], [3, [[4]]]])).toEqual([1, 3, 4]);
  });
  it('shoule return [1, {}, 3, 4]', () => {
    expect(steamroller([1, {}, [3, [[4]]]])).toEqual([1, {}, 3, 4]);
  });
});
