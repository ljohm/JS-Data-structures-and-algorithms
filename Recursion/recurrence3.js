// 118. Pascal's Triangle II(unsolved)

// recursive solution
let getRow = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }

  let previousRow = getRow(rowIndex - 1);
  let currentRow = [];

  for (let i = 0; i <= rowIndex; i++) {
    if (i === 0 || i === rowIndex) {
      currentRow.push(1);
    } else {
      currentRow.push(previousRow[i - 1] + previousRow[i]);
    }
  }

  return currentRow;
};

// non-recursive solution
// let getRow = function (rowIndex) {
//     let matrix = [];

//     for (let i = 0; i < rowIndex + 1; i++) {
//       matrix[i] = [];
//       for (let j = 0; j < i + 1; j++) {
//         if (j === 0 || i === j) {
//           matrix[i][j] = 1;
//         } else {
//           matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
//         }
//       }
//     }

//     return matrix[rowIndex];
//   };
