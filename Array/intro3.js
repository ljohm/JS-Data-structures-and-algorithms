// 977. Squares of a Sorted Array
// 각 원소의 제곱값을 오름차순으로 정렬

let sortedSquares = function (arr) {
  const res = Array(arr.length).fill(0);
  let left = 0,
    right = arr.length - 1,
    index = arr.length - 1;
  while (left <= right) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      res[index] = arr[left] * arr[left];
      left++;
    } else {
      res[index] = arr[right] * arr[right];
      right--;
    }
    index--;
  }
  return res;
};

let arr = [-7, -3, 2, 3, 11];
console.log(sortedSquares(arr));
