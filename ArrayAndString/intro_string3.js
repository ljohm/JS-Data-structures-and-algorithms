// 14. Longest Common Prefix

let longestCommonPrefix = function (strs) {
  if (strs.length < 0) {
    return;
  }

  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      if (str[i] !== strs[0][i]) {
        return str.slice(0, i);
      }
    }
  }
  return strs[0]; // strs가 ""일 경우
};

let arr = ["bag", "cuba", "urban"];
console.log(longestCommonPrefix(arr));
