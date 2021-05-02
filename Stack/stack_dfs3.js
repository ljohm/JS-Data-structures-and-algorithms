// 494. Target Sum
// Brute Force로 해결

let findTargetSumWays = function (nums, S) {
  let count = 0;

  let calculate = function (nums, i, sum, S) {
    if (i == nums.length) {
      if (sum == S) {
        // 인덱스가 배열 길이 끝까지 이동했고, 합계가 target과 같을 때!
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
