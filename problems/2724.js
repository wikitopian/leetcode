// const sortBy = (array, fn) => array.map((e, i) => ({e, fn: fn(e) }));

const sortBy = (array, fn) => array.sort((a, b) => fn(a) - fn(b));

const arrayTest = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const functionTest = (a) => {
  return a * 10;
};

console.log(sortBy(arrayTest, functionTest));
