// 236. Lowest Common Ancestor of a Binary Tree

let lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root;
  let resL = lowestCommonAncestor(root.left, p, q);
  let resR = lowestCommonAncestor(root.right, p, q);
  return resL && resR ? root : resL || resR;
};
