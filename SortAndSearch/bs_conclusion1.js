// 50. Pow(x, n)

// Recursion solution
let myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  // 지수를 절대값화
  let pow = Math.abs(n);

  // pow가 짝수일 때
  if (pow % 2 === 0) {
    result = myPow(x * x, pow / 2);
  } else {
    result = myPow(x * x, (pow - 1) / 2) * x;
  }

  // 지수가 음수 or 양수일때에 따라
  return n < 0 ? 1 / result : result;
};

console.log(myPow(2.0, -2));
