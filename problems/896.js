const isMonotonic = (nums) => (
    nums.every((num, i) => num - (nums[i + 1] ?? num) >= 0 ? true : false)
    ||
    nums.every((num, i) => num - (nums[i + 1] ?? num) <= 0 ? true : false)
  );

console.log(isMonotonic([6, 5, 5, 4]));
console.log(isMonotonic([4, 5, 5, 6, 4]));
