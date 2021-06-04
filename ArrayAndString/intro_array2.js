// 747. Largest Number At Least Twice of Others

let dominantIndex = function (nums) {
  let max = Math.max(...nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== max && nums[i] * 2 > max) {
      return -1;
    }
  }
  return nums.indexOf(max);
};

let arr = [1];
console.log(dominantIndex(arr));
