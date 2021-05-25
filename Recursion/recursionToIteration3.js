// 94. Binary Tree Inorder Traversal

// Iterative solution
let inorderTraversal = function (root) {
  const stack = [];
  const res = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
};

// Recursive solution
let inorderTraversal = function (root) {
  function traverse(root) {
    if (!root) {
      return;
    }
    traverse(root.left);
    res.push(root.val);
    traverse(root.right);
  }

  let res = [];

  traverse(root);
  return res;
};
