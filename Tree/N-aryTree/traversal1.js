// 569. N-ary Tree Preorder Traversal

// recursive solution
let preorder = function (root) {
  const result = [];

  function traverse(tree) {
    if (!tree) {
      return result;
    }
    result.push(tree.val);
    for (let i = 0; i < tree.children.length; i++) {
      traverse(tree.children[i]);
    }
    return result;
  }

  return traverse(root);
};

// iterative solution
var preorder = function (root) {
  const stack = [root];
  const result = [];
  if (!root) {
    return result;
  }
  while (stack.length) {
    const node = stack.pop();
    result.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    } // pop()으로 원소를 빼내므로 역방향으로 push
  }
  return result;
};
