// 112. Path Sum

let hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return root.val === targetSum ? true : false;
  }
  let remain = targetSum - root.val;
  return hasPathSum(root.left, remain) || hasPathSum(root.right, remain);
};
