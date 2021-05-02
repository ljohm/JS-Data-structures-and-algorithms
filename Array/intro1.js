// 485. Max Consecutive Ones
// 연속된 배열 원소의 최대 값

// 1.
let MaxConsecutiveOnes1 = function (nums) {
  let count = 0,
    max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      if (count > max) {
        // 원소값이 1이고 count값이 max를 초과하면 max 갱신
        max = count;
      }
    } else {
      // 원소값이 1이 아니라면 count값 초기화
      count = 0;
    }
  }
  return max;
};

let arr = [1, 1, 0, 1, 1, 1];
console.log(MaxConsecutiveOnes1(arr));

// 2.
let MaxConsecutiveOnes2 = function (nums) {
  let count = 0,
    max = 0;
  for (n of nums) {
    n === 1 ? count++ : (count = 0);
    if (count > max) {
      max = count;
    }
  }
  return max;
};

console.log(MaxConsecutiveOnes2(arr));
