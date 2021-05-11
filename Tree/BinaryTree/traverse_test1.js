// 144. Binary Tree Preorder Traversal(전위 순회, 노드 자신먼저 순회)

let preorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  let result = [];
  let stack = [root];

  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
};
