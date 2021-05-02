// 733. Flood Fill

let floodFill = function (image, sr, sc, newColor) {
  let color = image[sr][sc];
  if (color !== newColor) {
    dfs(image, sr, sc, color, newColor);
  }
  return image;
};

function dfs(image, r, c, color, newColor) {
  if (image[r][c] === color) {
    image[r][c] = newColor;
    if (r - 1 >= 0) {
      dfs(image, r - 1, c, color, newColor);
    }
    if (c - 1 >= 0) {
      dfs(image, r, c - 1, color, newColor);
    }
    if (r + 1 < image.length) {
      dfs(image, r + 1, c, color, newColor);
    }
    if (c + 1 < image[0].length) {
      dfs(image, r, c + 1, color, newColor);
    }
  }
}

let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];

console.log(floodFill(image, 1, 1, 2));
