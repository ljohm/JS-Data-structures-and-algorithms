// 28. Implement strStr()

let strStr = function (haystack, needle) {
  if (needle === "" && haystack === "") {
    return 0;
  }

  for (var i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};

console.log(strStr("aaaaa", "bba"));

// substr(i, n) => i번째 인덱스부터 n만큼의 문자열
// substring(i, n) => i번째 인덱스와 n번째 인덱스 사이의 문자열
