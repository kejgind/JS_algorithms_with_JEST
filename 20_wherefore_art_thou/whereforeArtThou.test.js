const whereforeArtThou = require('./whereforeArtThou');

describe('Wherefore art thou - Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.', () => {
  it('should return an "array"', () => {
    expect(
      whereforeArtThou([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }], { a: 1 })
    ).toEqual(expect.any(Array));
  });
  it('should return [{ first: "Tybalt", last: "Capulet" }]', () => {
    expect(
      whereforeArtThou(
        [
          { first: 'Romeo', last: 'Montague' },
          { first: 'Mercutio', last: null },
          { first: 'Tybalt', last: 'Capulet' },
        ],
        { last: 'Capulet' }
      )
    ).toEqual([{ first: 'Tybalt', last: 'Capulet' }]);
  });
  it('should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]', () => {
    expect(
      whereforeArtThou([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }], { a: 1 })
    ).toEqual([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }]);
  });
  it('should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]', () => {
    expect(
      whereforeArtThou([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }], {
        a: 1,
        b: 2,
      })
    ).toEqual([{ a: 1, b: 2 }, { a: 1, b: 2, c: 2 }]);
  });
  it('should return [{ "a": 1, "b": 2, "c": 2 }]', () => {
    expect(
      whereforeArtThou([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }], {
        a: 1,
        c: 2,
      })
    ).toEqual([{ a: 1, b: 2, c: 2 }]);
  });
});
