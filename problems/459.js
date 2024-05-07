// worked, but with terrible time
/*
const repeatedSubstringPattern = (s) => {
  for ( let part = Math.floor(s.length / 2); part >= 1; part -= 1) {
    const test = new RegExp(String.raw`^(\w{${part}})\1+$`, 'g');
    if (s.match(test)) return true;
  }

  return false;
};
*/

// better way
const repeatedSubstringPattern = (s) => s.repeat(2).slice(1, -1).includes(s);

console.log(repeatedSubstringPattern('abababab'));
