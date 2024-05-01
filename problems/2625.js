// // TIME LIMIT EXCEEDED
// const flat = (arr = [], n = 0) => arr.reduce((out, e) => {
//   if (n < 1 || !Array.isArray(e)) out.push(e);
//   else return out.concat(flat(e, n - 1));
//
//   return out;
// }, []);

const flat = (arr, n = 0, out = []) => {
  if (n == 0) return arr;

  for (const elem of arr) {
    if (Array.isArray(elem)) out = out.concat(flat(elem, n - 1));
    else out.push(elem);
  }

  return out;
};


const arr0 = [1,2,3,[4,5,6],[7,8,[9,[101, 102],11],12],[13,14,15]];
const nest = 2;

console.log(flat(arr0, nest));
