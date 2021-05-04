// 189. Rotate Array

let rotate = function (nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(-k));
  return nums;
};

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(arr, 3));
