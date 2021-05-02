// 200. Number of Islands
// 0이 물, 1이 섬을 의미하는 배열을 입력으로 받을 때
// 섬의 총 개수를 출력

let numIslands = function (grid) {
  let count = 0;

  function dfs(i, j) {
    // bound check
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length) {
      // 원소가 배열 안에 존재한다면
      return;
    }
    if (grid[i][j] === "0") {
      // 원소값이 0이라면 => 그냥 리턴
      return;
    }

    grid[i][j] = "0"; // 선택된 원소값을 0으로 변경후 parameter 바꿔서 다시 함수 실행
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        // 원소가 1이면 count 증가후 함수 실행
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
