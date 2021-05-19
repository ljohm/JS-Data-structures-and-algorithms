// 108. Convert Sorted Array to Binary Search Tree(unsovled)

let sortedArrayToBST = function (nums) {
  function constructBST(left, right) {
    // base case
    if (left > right) return null;
    if (left == right) return new TreeNode(nums[left]);

    const mid = left + Math.floor((right - left) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = constructBST(left, mid - 1);
    root.right = constructBST(mid + 1, right);

    return root;
  }
  return constructBST(0, nums.length - 1);
};
