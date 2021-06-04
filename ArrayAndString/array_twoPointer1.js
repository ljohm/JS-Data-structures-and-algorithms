// 344. Reverse String

let reverseString = function (strs) {
  let left = 0,
    right = strs.length - 1;

  while (left < right) {
    let tmp = strs[left];
    strs[left] = strs[right];
    strs[right] = tmp;
    left++;
    right--;
  }

  return strs;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
