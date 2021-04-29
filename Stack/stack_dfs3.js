// 494. Target Sum
// Brute Force로 해결

let findTargetSumWays = function (nums, S) {
  let count = 0;
  let calculate = function (nums, i, sum, S) {
    if (i == nums.length) {
      if (sum == S) {
        count++;
      }
    } else {
      calculate(nums, i + 1, sum + nums[i], S);
      calculate(nums, i + 1, sum - nums[i], S);
    }
  };
  calculate(nums, 0, 0, S);
  return count;
};

let arr = [1, 1, 1, 1, 1];
console.log(findTargetSumWays(arr, 3));
