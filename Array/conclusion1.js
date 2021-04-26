// 1051. Height Checker
// 키 순서대로 정렬하고
// 정렬 후 위치가 달라진 원소의 개수 출력

let heightChecker = function (heights) {
  let count = 0;
  let expected = [...heights].sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) {
      count++;
    }
  }
  return count;
};

let arr = [1, 1, 4, 2, 1, 3];
console.log(heightChecker(arr));
