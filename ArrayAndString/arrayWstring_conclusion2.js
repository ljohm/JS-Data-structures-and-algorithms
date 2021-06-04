// 119. Pascal's Triangle 2

let getRow = function (rowIndex) {
  let res = [];
  for (let i = 0; i <= rowIndex; i++) {
    res[i] = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || i === j) {
        res[i][j] = 1;
      } else {
        res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
      }
    }
  }
  return res[rowIndex];
};

console.log(getRow(3));
