// 102. Binary Tree Level Order Traversal

let levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const stack = [root];
  const result = [];

  while (stack.length) {
    const temp = [];
    const length = stack.length;
    for (let i = 0; i < length; i++) {
      let node = stack.shift();
      temp.push(node.val);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    result.push(temp);
  }
  return result;
};
