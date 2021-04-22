// 977. Squares of a Sorted Array
// 각 원소의 제곱값을 오름차순으로 정렬

let sortedSquares = function (arr) {
  let _arr = arr;
  for (let i = 0; i < _arr.length; i++) {
    _arr[i] = _arr[i] * _arr[i];
  }
  _arr.sort(function (a, b) {
    return a - b;
  });

  return _arr;
};

let arr = [-7, -3, 2, 3, 11];
console.log(sortedSquares(arr));
