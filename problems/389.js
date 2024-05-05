
const findTheDifference = (orig, hide) =>
  [...orig].reduce((remain, letter) => remain.replace(letter, ''), hide);

console.log(findTheDifference("a", "aa"));
