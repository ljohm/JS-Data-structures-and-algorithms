// 240. Search a 2D Matrix II(unsolved)

let searchMatrix = function (matrix, target) {
  if (!matrix) {
    return false;
  }
  if (matrix.length === 0) {
    return false;
  }
  if (iRow === matrix.length) {
    return false;
  }

  // Set iCol to top-right index.
  if (typeof iCol === "undefined") {
    iCol = matrix[0].length - 1;
  }

  const val = matrix[iRow][iCol];

  if (target === val) {
    return true;
  }
  if (target < val) {
    return searchMatrix(matrix, target, iRow, iCol - 1);
  }

  return searchMatrix(matrix, target, iRow + 1, iCol);
};
