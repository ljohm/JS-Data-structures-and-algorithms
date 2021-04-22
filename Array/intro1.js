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
        max = count;
      }
    } else {
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
