// 101. Symmetric Tree

// 1 - 재귀로 해결
let isSymmetric = function (root) {
  if (!root) {
    // Sanity check
    return true;
  }

  // Check if tree s & t are mirroring each other
  function isMirror(s, t) {
    if (!s && !t) {
      return true; // Both nodes are null, ok
    }
    if (!s || !t || s.val !== t.val) {
      return false; // Found a mismatch
    }
    // Compare the left subtree of `s` with the right subtree of `t`
    // and the right subtree of `s` with the left subtree of `t`
    return isMirror(s.left, t.right) && isMirror(s.right, t.left);
  }

  return isMirror(root.left, root.right);
};

// 2 - DFS로 해결
function isMirror(p, q) {
  // Create two stacks
  var s1 = [p],
    s2 = [q];

  // Perform preorder traversal
  while (s1.length > 0 || s2.length > 0) {
    var n1 = s1.pop(),
      n2 = s2.pop();

    // Two null nodes, let's continue
    if (!n1 && !n2) continue;

    // Return false as long as there is a mismatch
    if (!n1 || !n2 || n1.val !== n2.val) return false;

    // Scan tree s from left to right
    // and scan tree t from right to left
    s1.push(n1.left);
    s1.push(n1.right);
    s2.push(n2.right);
    s2.push(n2.left);
  }

  return true;
}

// 3 - BFS로 해결
function isMirror(s, t) {
  var q1 = [s],
    q2 = [t];

  // Perform breadth-first search
  while (q1.length > 0 || q2.length > 0) {
    // Dequeue
    var n1 = q1.shift(),
      n2 = q2.shift();

    // Two null nodes, let's continue
    if (!n1 && !n2) continue;

    // Return false as long as there is a mismatch
    if (!n1 || !n2 || n1.val !== n2.val) return false;

    // Scan tree s from left to right
    // and scan tree t from right to left
    q1.push(n1.left);
    q1.push(n1.right);
    q2.push(n2.right);
    q2.push(n2.left);
  }

  return true;
}
