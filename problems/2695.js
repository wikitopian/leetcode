class ArrayWrapper {
  constructor(arr) {
    this.arr = arr;
  }

  valueOf() {
    return this.arr.reduce((prev, curr) => prev + curr, 0);
  }

  toString() {
    return `[${this.arr.join(',')}]`;
  }
}


const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2); // 10
