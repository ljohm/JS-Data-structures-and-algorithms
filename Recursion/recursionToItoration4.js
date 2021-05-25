// 102. Binary Tree Level Order Traversal

// Iterative solution
let levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let stack = [root];
  let res = [];
  while (stack.length) {
    const size = stack.length;
    const temp = [];
    for (let i = 0; i < size; i++) {
      let node = stack.shift();
      temp.push(node.val);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    res.push(temp);
  }
  return res;
};

// Recursive solution
let levelOrder = function (root) {
  function helper(node, level, res) {
    if (!node) {
      return;
    }
    if (!res[level]) {
      res[level] = [];
    }
    res[level].push(node.val);
    helper(node.left, level + 1, res);
    helper(node.right, level + 1, res);
  }

  let res = [];

  helper(root, 0, res);
  return res;
};
