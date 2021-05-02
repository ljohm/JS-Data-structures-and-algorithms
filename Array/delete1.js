// 27. Remove Element
// 배열 안에서 주어진 val값을 만족하는 원소 삭제 후
// 전체 길이 리턴

let removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1); // splice 기억할것!!
      i--; // 전체 길이가 줄어들었으니까 i 반드시 줄여야함!!
    }
  }
  return nums.length;
};

let nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3));
console.log(nums);
