// 209. Minimum Size Subarray Sum(unsolved)

let minSubArrayLen = function (target, nums) {
  let total = nums.reduce((a, b) => {
    return a + b;
  });

  if (total < target) {
    return 0;
  }

  let min = nums.length;

  let left = 0;
  let right = 0;

  let sum = 0;

  while (right < nums.length) {
    sum += nums[right];

    if (sum >= target) {
      min = Math.min(min, right - left + 1);
      sum -= nums[left];
      left++;
      sum -= nums[right];
      right--;
    }

    right++;
  }

  return min;
};
