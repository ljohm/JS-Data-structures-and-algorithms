// 448. Find All Numbers Disappeeared in an Array

let findDisappearedNumbers = function (nums) {
  let newIndex,
    res = [];

  for (let i = 0; i < nums.length; i++) {
    newIndex = Math.abs(nums[i]) - 1;
    //Math.abs() -> 절대값 중요
    if (nums[newIndex] > 0) {
      // 이미 음수화된 원소는 제외하고 양수 원소일 경우에만 음수화
      nums[newIndex] *= -1;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }

  return res;
};

let arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(arr));
