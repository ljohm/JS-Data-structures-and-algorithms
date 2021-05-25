// 100. Same Tree

// recursive solution
let isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }
  if (!p || !q) {
    return false;
  }

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};

// Iterative solution(unsolved)
let isSameTree = function (p, q) {
  const stack1 = [],
    stack2 = [];
  while (p || q || stack1.length || stack2.length) {
    while (p) {
      stack1.push(p);
      p = p.left;
    }
    while (q) {
      stack2.push(q);
      q = q.left;
    }
    p = stack1.pop();
    q = stack2.pop();
    if (!p && !q) {
      continue;
    }
    if (!p || !q || p.val !== q.val) {
      return false;
    }
    stack1.push(null);
    stack2.push(null);
    p = p.right;
    q = q.right;
  }
  return true;
};
