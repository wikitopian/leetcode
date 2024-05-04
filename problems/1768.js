// My original

const mergeAlternately = (w1, w2) => {
  const both = [];

  let stop = w1.length <= w2.length ? w1.length : w2.length;

  [...w1].forEach((letter, i) => i < stop ? both[i * 2] = letter : both[stop + i] = letter);
  [...w2].forEach((letter, i) => i < stop ? both[(i * 2) + 1] = letter : both[stop + i] = letter);

  return both.join('');
};

console.log(mergeAlternately('butter', 'head'));
