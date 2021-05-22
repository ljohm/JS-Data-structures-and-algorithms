// Search for a Range

let searchRange = function (nums, target) {
  let low = 0,
    high = nums.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] >= target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  if (nums[low] !== target) {
    return [-1, -1];
  }

  const leftBound = low;

  low = 0;
  high = nums.length;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (nums[mid] > target) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return [leftBound, high - 1];
};
