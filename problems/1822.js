const arraySign = (a) => a.reduce((prod, d, i, arr) => d === 0 ? (arr.length = 0 ? 0 : 0) : (d > 0 ? prod * 1 : prod * -1), 1);

console.log(arraySign([-1,-2,-3,-4,3,2,1]));
