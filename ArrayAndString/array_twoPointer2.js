// 561. Array Partition 1

let arrayPairSum = function (nums) {
  let sum = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};

console.log(arrayPairSum([1, 4, 3, 2]));
