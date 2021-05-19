// 110. Balanced Binary Tree(unsolved)

let isBalanced = function (root) {
  let res = true;
  function helper(root) {
    if (!root) return 0;
    let left = go(root.left);
    let right = go(root.right);
    if (left - right > 1 || right - left > 1) {
      res = false;
    }
    return Math.max(left, right) + 1;
  }
  helper(root);
  return res;
};
