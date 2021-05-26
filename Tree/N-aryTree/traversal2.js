// 590. N-ary Tree Postorder Traversal

let postorder = function (root) {
  let res = [];
  function traverse(tree) {
    if (!tree) {
      return res;
    }
    for (let i = 0; i < tree.children.length; i++) {
      traverse(tree.children[i]);
    }
    res.push(tree.val);
    return res;
  }
  return traverse(root);
};

// same
let postorder = function (root) {
  let res = [];
  function traverse(tree) {
    if (tree) {
      for (let i = 0; i < tree.children.length; i++) {
        traverse(tree.children[i]);
      }
      res.push(tree.val);
    }
  }
  traverse(root);
  return res;
};
