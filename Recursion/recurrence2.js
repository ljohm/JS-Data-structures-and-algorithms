// 700. Search in a Binary Search Tree

// recursive solution
let searchBST = function (root, val) {
  if (!root) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  if (val < root.val) {
    return searchBST(root.left, val);
  }
  if (val > root.val) {
    return searchBST(root.right, val);
  }
};

// non recursive solution
let searchBST = function (root, val) {
  while (root !== null && root.val !== val) {
    if (val < root.val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return root;
};
