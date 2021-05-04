// 119. Pascal's Triangle 2

let getRow = function (rowIndex) {
  let matrix = [];

  for (let i = 0; i < rowIndex + 1; i++) {
    matrix[i] = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || i === j) {
        matrix[i][j] = 1;
      } else {
        matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
      }
    }
  }

  return matrix[rowIndex];
};

console.log(getRow(3));
