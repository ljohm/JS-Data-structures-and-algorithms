// 498. Diagonal Traverse
// 2차원 배열을 지그재그 방향으로 탐색

let findDiagonalOrder = function (mat) {
  let rows = mat.length,
    columns = mat[0].length;
  const res = new Array(rows + columns - 1);
  // 생성될 배열의 사이즈는 rows + columns - 1이다

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (!res[i + j]) {
        res[i + j] = [];
      }
      res[i + j].push(mat[i][j]);
    }
  }

  for (let i = 0; i < rows + columns - 1; i = i + 2) {
    // 짝수번째 대각선은 원소 순서를 뒤집어줘야 함.
    res[i] = res[i].reverse();
  }
  return res.flat(); // 배열 안의 배열을 제거
};

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(findDiagonalOrder(mat));
