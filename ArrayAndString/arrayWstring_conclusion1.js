// 189. Rotate Array

let rotate = function (nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(-k));
  //slice는 원본 배열에 영향을 주지 않기때문에
  // rotate([1, 2, 3], 2) -> [2, 3, 1, 2, 3]이 됨.
  // => splice를 쓰자
  return nums;
};

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(arr, 3));
