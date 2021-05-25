// divide -> conquer(재귀적으로 정렬) -> combine(병합)
// 912. Sort an Array

let sortArray = function (nums) {
  function merge(left, right) {
    let res = [];
    while (left.length && right.length) {
      let tmp;
      if (left[0] < right[0]) {
        tmp = left.shift();
        res.push(tmp);
      } else {
        tmp = right.shift();
        res.push(tmp);
      }
      //   res.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return res.concat(left, right);
  }

  let len = nums.length;

  if (len < 2) {
    return nums;
  }

  const mid = Math.floor(len / 2);
  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid, len));

  return merge(left, right);
};

console.log(sortArray([5, 2, 3, 1]));
