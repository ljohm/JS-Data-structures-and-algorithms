// 66. Plus One

let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }
  return [1, ...digits]; // 만약 digits가 [9, 9] 일때
};

let arr = [1, 5, 4, 9];
console.log(plusOne(arr));
