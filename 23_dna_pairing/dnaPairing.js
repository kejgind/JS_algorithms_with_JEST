const dnaPairing = str =>
  str.split('').map(el => {
    let a = [...el];
    switch (el) {
    case 'A':
      a.push('T');
      break;
    case 'T':
      a.push('A');
      break;
    case 'C':
      a.push('G');
      break;
    case 'G':
      a.push('C');
      break;
    }
    return a;
  });

module.exports = dnaPairing;
