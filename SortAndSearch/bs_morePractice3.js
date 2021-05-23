// 4. Median of Two Sorted Arrays(unsolved)

let findMedianSortedArrays = function (nums1, nums2) {
  const len = nums1.length + nums2.length;
  const nums = [];
  let l = 0,
    r = 0;

  // Merge arrays
  while (nums.length < len) {
    if (nums1[l] < nums2[r] || r >= nums2.length) {
      nums.push(nums1[l++]);
    } else if (nums1[l] >= nums2[r] || l >= nums1.length) {
      nums.push(nums2[r++]);
    }
  }

  // Calculate and return median
  return len % 2
    ? nums[Math.floor(len / 2)]
    : (nums[len / 2 - 1] + nums[len / 2]) / 2;
};

console.log(findMedianSortedArrays([1], [2]));
