// 279. Perfect Squares

let numSquares = function (n) {
  let arr = new Array(n + 1).fill(0);
  arr[1] = 1;
  for (let sqr = 1; sqr * sqr <= n; sqr++) {
    for (let i = sqr * sqr; i < arr.length; i++) {
      if (arr[i] === 0) {
        arr[i] = arr[i - sqr * sqr] + 1;
      } else {
        arr[i] = Math.min(arr[i - sqr * sqr] + 1, arr[i]);
      }
    }
  }
  return arr[n];
};

console.log(numSquares(16));
