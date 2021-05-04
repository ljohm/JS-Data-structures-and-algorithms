// 344. Reverse String

let reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let prev = s[left];
    s[left] = s[right];
    s[right] = prev;
    left++;
    right--;
  }

  return s;
};

let arr = ["H", "a", "n", "n", "a", "h"];
console.log(reverseString(arr));
