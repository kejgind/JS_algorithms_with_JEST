const searchAndReplace = require('./searchAndReplace');

describe('Search and Replace - Perform a search and replace on the sentence using the arguments provided and return the new sentence.', () => {
  it('should return a string', () => {
    expect(searchAndReplace('His name is Tom', 'Tom', 'john')).toEqual(
      expect.any(String)
    );
  });
  it('should return "Let us go to the mall"', () => {
    expect(searchAndReplace('Let us go to the store', 'store', 'mall')).toEqual(
      'Let us go to the mall'
    );
  });
  it('should return "He is Sitting on the couch"', () => {
    expect(
      searchAndReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')
    ).toEqual('He is Sitting on the couch');
  });
  it('should return "This has a spelling error"', () => {
    expect(
      searchAndReplace('This has a spellngi error', 'spellngi', 'spelling')
    ).toEqual('This has a spelling error');
  });
  it('should return "His name is John"', () => {
    expect(searchAndReplace('His name is Tom', 'Tom', 'john')).toEqual(
      'His name is John'
    );
  });
  it('should return "Let us get back to more Algorithms"', () => {
    expect(
      searchAndReplace('Let us get back to more Coding', 'Coding', 'algorithms')
    ).toEqual('Let us get back to more Algorithms');
  });
});
