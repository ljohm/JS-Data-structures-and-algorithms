// 151. Reverse Words in a String

let reverseWords = function (s) {
  return s
    .split(" ") // 공백을 기준으로 배열화
    .filter((string) => string) // 공백 여러개를 지우려는 목적
    .reverse() // 배열 reverse
    .join(" "); // 배열의 문자열화
};

console.log(reverseWords("    hello world    "));
