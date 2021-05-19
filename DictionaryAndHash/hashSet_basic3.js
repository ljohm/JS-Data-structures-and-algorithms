// 349. Intersection of Two Arrays

let intersection = function (nums1, nums2) {
  let solution = nums1.filter((num) => nums2.includes(num));
  const res = new Set(solution);
  return [...res];
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
