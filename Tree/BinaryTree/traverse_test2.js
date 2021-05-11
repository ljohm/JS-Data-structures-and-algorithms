// 94. Binary Tree Inorder Traversal(중위 순회, 오름차순 탐색)

let inorderTraversal = function (root) {
  let result = [];
  let stack = [];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop();
      result.push(root.val);
      root = root.right;
    }
  }
  return result;
};
