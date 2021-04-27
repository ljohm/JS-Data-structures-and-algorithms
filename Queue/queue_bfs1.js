// 200. Number of Islands
// 0이 물, 1이 섬을 의미하는 배열을 입력으로 받을 때
// 섬의 총 개수를 출력

let numIslands = function (grid) {
  let count = 0;

  function dfs(i, j) {
    // bound check
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) {
      return;
    }
    if (grid[i][j] === "0") {
      return;
    }

    grid[i][j] = "0";
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

console.log(numIslands(grid));
