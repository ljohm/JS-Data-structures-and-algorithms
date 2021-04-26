// 977. Squares of a Sorted Array

// let sortedSquares = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] * nums[i];
//   }
//   nums.sort((a, b) => {
//     return a - b;
//   });
//   return nums;
// };

let sortedSquares = function (nums) {
  const res = Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      res[index] = nums[left] * nums[left];
      left++;
    } else {
      res[index] = nums[right] * nums[right];
      right--;
    }
    index--;
  }
  return res;
};

let arr = [-4, -1, 0, 3, 6, 10];
console.log(sortedSquares(arr));
