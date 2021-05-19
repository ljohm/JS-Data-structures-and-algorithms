// 98. Validate Binary Search Tree(unsolved)
// 이진 탐색 트리: 노드의 왼쪽에는 노드보다 작은 값,
// 노드의 오르쪽에는 노드보다 큰 값의 노드를 가져야 함.

let isValidBST = function (root) {
  if (!root) {
    return true; // Sanity check for passing test case '[]'
  }

  function helper(root, min, max) {
    if (!root) {
      return true; // We hit the end of the path
    }

    if (
      (min !== null && root.val <= min) ||
      (max !== null && root.val >= max)
    ) {
      return false; // current node's val doesn't satisfy the BST rules
    }

    // Continue to scan left and right
    return (
      helper(root.left, min, root.val) && helper(root.right, root.val, max)
    );
  }

  return helper(root, null, null);
};
