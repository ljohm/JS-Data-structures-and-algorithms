// 744. Find Smallest Letter Greater Than Target(unsolved)

let nextGreatestLetter = function (letters, target) {
  let low = 0;
  let high = letters.length - 1;

  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low;

    if (letters[mid] > target) {
      high = mid - 1;
    } else {
      // HERE: When the target is found we still want to continue searching on the right.
      low = mid + 1;
    }
  }
  return letters[low % letters.length];
};
