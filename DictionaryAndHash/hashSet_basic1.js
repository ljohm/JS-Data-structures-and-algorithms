// 217. Contains Duplicate

let containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length;
};
