// 658. Find K Closest Elements(unsolved)

let findClosestElement = function (arr, k, x) {
  let low = 0,
    hi = arr.length - k;

  while (low < hi) {
    let mid = Math.floor((low + hi) / 2);
    // for subarray starting at mid with size k+1, we compare element of two ends to eliminate the loser
    if (x - arr[mid] > arr[mid + k] - x) {
      low = mid + 1; // arr[mid] is the one further away from x, eliminate range[lo, mid]
    } else {
      hi = mid; // arr[mid+k] is the one further away, all [mid, hi] will have simiar situation, elimiate them
    }
  }
  return arr.slice(low, low + k);
};
