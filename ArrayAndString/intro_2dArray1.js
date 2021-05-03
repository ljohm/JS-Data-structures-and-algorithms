// 498. Diagonal Traverse
// 2차원 배열을 지그재그 방향으로 탐색

let findDiagonalOrder = function (mat) {
  let rows = mat.length;
  let columns = mat[0].length;

  let results = new Array(rows + columns - 1);

  if (mat.length === 0 || mat[0].length == 0) return [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (!results[i + j]) {
        results[i + j] = [];
      }
      results[i + j].push(mat[i][j]);
    }
  }

  for (i = 0; i < rows + columns - 1; i = i + 2) {
    if (i % 2 === 0) {
      // 짝수번째 대각선은 원소 순서를 뒤집어줘야 함.
      results[i] = results[i].reverse();
    }
  }

  return results.flat(); // 배열 안의 배열을 제거
};

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(findDiagonalOrder(mat));
