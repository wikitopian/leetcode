const plusOne = (a) => String(a.reduce((t, d, i) => BigInt(t) + BigInt(d) * (BigInt(10) ** BigInt(a.length - i - 1)), 1)).split('');


// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
// console.log(plusOne([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]));
console.log(plusOne([7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6]));
