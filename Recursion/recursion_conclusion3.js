// 95. Unique Binary Search Trees II(unsolved)

var generateTrees = function (n) {
  const constructArray = (start, end) => {
    const result = [];

    if (start > end) {
      return [null];
    }

    if (start === end) {
      return [new TreeNode(start)];
    }

    if (end - start === 1) {
      const first = new TreeNode(start, null, new TreeNode(end));
      const second = new TreeNode(end, new TreeNode(start), null);
      return [first, second];
    }

    for (let i = start; i <= end; i++) {
      const leftSide = constructArray(start, i - 1);
      const rightSide = constructArray(i + 1, end);

      leftSide.forEach((ls) => {
        rightSide.forEach((rs) => {
          const tree = new TreeNode(i, ls, rs);

          result.push(tree);
        });
      });
    }

    return result;
  };

  return constructArray(1, n);
};
