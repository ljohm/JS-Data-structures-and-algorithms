// 559. Maximum Depth of N-ary Tree(unsolved)

// DFS Recursion
let maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  let max = 0;
  for (let child of root.children) {
    max = Math.max(max, maxDepth(child));
  }

  return max + 1;
};

// DFS Recursion with helper function
let maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let max = -1;

  const helper = (node, depth) => {
    if (depth > max) {
      max = depth;
    }
    for (let c of node.children) {
      helper(c, depth + 1);
    }
  };

  helper(root, 1);
  return max;
};

// BFS
let maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  // Note: it is not advised to use array as queue
  let queue = [],
    depthCount = 0;
  queue.push(root);

  while (queue.length > 0) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      for (let child of node.children) {
        queue.push(child);
      }
    }
    depthCount++;
  }
  return depthCount;
};
