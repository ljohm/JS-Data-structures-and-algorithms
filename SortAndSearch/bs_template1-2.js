// 374. Guess Number highter or lefter(unsolved)
// pick은 대체..??

let guessNumber = function (n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    const apiResult = guess(mid);

    if (apiResult === 0) {
      return mid;
    } else if (apiResult === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

console.log(guessNumber(10));
