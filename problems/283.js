// works, but terrible perf
const moveZeroes = (nums) => {
  for (let i = 0; i <= nums.length; i += 1) {
    if (nums.slice(i).every((num) => !num)) return nums;

    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
      i -= 1;
    }
  }

  return nums;
};

console.log(moveZeroes([0,0,1,]));
