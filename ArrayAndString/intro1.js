// 724. Find Pivot Index

let pivotIndex = function (nums) {
  let sum = nums.reduce((a, b) => a + b, 0);
  let sumL = 0,
    sumR = sum;

  for (let i = 0; i < nums.length; i++) {
    sumR -= nums[i];
    if (sumL === sumR) {
      return i;
    }
    sumL += nums[i];
  }

  return -1;
};

let arr = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(arr));

let arr2 = [1, 2, 3];
console.log(arr2.reduce((a, b) => a + b, 1));
