// Backtracking(역추적): 잘못된 방향으로 추적하고 있을 때,
// 멈추고 상위 다른 노드로 이동해서 다시 추적.

// 51. N-Queens II(unsolved)

var totalNQueens = function (n) {
  const cols = new Set(),
    hills = new Set(),
    dales = new Set();

  const isSafe = (row, col) =>
    !(cols.has(col) || hills.has(row - col) || dales.has(row + col));

  const placeQueen = (row, col) => {
    cols.add(col), hills.add(row - col), dales.add(row + col);
  };

  const removeQueen = (row, col) => {
    cols.delete(col), hills.delete(row - col), dales.delete(row + col);
  };

  const backtrackQueen = (row, count) => {
    if (row === n) {
      return ++count;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        placeQueen(row, col);
        count = backtrackQueen(row + 1, count);
        removeQueen(row, col);
      }
    }
    return count;
  };
  return backtrackQueen(0, 0);
};
