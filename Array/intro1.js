// 485. Max Consecutive Ones
// 연속된 배열 원소의 최대 값

let MaxConsecutiveOnes = function (nums) {
  let count = 0,
    max = 0;

  for (let num of nums) {
    num === 1 ? count++ : (count = 0);
    if (count > max) {
      max = count;
    }
  }

  return max;
};

console.log(MaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
