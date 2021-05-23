// 367. Valid Perfect Square

let isPerfectSquare = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i += 2) {
    sum += i;
    if (sum === num) {
      return true;
    }
  }
  return false;
};
