// 561. Array Partition 1

let arrayPairSum = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  let res = 0;
  for (let i = 0; i < nums.length; i += 2) {
    res += nums[i];
  }
  return res;
};

let arr = [1, 2, 2, 5, 6, 6];
console.log(arrayPairSum(arr));
