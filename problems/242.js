const isAnagram = (s, t) => s.length === t.length ? ![...s].reduce((remain, letter) => remain.replace(letter, ''), t) : false;

console.log(isAnagram('rat', 'tar'));
