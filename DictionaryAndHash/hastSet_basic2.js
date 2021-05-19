// 136. Single Number
// XOR을 사용하면 됨!!

let singleNumber = function (nums) {
  let num = 0;
  for (let n of nums) {
    num ^= n;
  }
  return num;
};
