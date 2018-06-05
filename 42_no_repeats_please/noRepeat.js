const noRepeat = str => {
  /**
   * Function to create array with all possible permutations
   * Uses Heap's algorithm
   */
  function permute(permutation) {
    const length = permutation.length;
    const result = [permutation.slice()];
    const c = [...Array(length)].fill(0);
    let i = 1,
      k,
      p;
    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        result.push(permutation.slice());
      } else {
        c[i] = 0;
        ++i;
      }
    }
    return result;
  }
  /**
   * Create array with elements that will be permuted
   * Prepare regex to filter all permutations with repeated letters
   * Calculate and return number of permutations without repetitions
   */
  const startArr = str.split('');
  const regex = /(.)\1/;
  const permArr = permute(startArr)
    .map(el => el.join(''))
    .filter(el => !regex.test(el));
  return permArr.length;
};

module.exports = noRepeat;
