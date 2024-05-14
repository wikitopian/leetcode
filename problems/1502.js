const canMakeArithmeticProgression = (nums) => !nums.sort((a, b) => a - b).reduce((status, num) => {
  if (status.fail) return status;

  if (status.prev !== false && status.diff !== false && num - status.prev !== status.diff) status.fail = true;

  if (status.prev !== false) status.diff = num - status.prev;

  status.prev = num;

  return status;
}, { prev: false, diff: false, fail: false }).fail;

// console.log('::', canMakeArithmeticProgression([-68,-96,-12,-40,16]));
console.log('::', canMakeArithmeticProgression([0, 0, 1]));
