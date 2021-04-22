// 80. Remove Duplicates from Sorted Array2
// 중복 원소 값 삭제 후 길이 반환

let removeDuplicates = function (nums) {
  let current = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === current) {
      nums.splice(i, 1);
      i--;
    } else if (nums[i] !== current) {
      current = nums[i];
    }
  }
  return nums.length;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
console.log(nums);
