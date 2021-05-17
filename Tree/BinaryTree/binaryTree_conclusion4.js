// 117. Populating Next Right Pointers in Each Node 2

let getNextMost = function (root) {
  if (!root) return null;
  if (root.left) return root.left; // check left leg
  if (root.right) return root.right; // check right leg
  return getNextMost(root.next); // check nexts
};

let connect = function (root) {
  if (!root) {
    return root;
  }
  if (root.right) {
    root.right.next = getNextMost(root.next);
  }
  if (root.left) {
    root.left.next = root.right ? root.right : getNextMost(root.next);
  }
  connect(root.right);
  connect(root.left);
  return root;
};
