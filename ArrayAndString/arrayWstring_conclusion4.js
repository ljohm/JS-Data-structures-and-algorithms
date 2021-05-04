// 557. Reverse Words in a String 3

let reverseWords = function (s) {
  let result = [];
  const sliced = s.split(" ");
  for (let i = 0; i < sliced.length; i++) {
    result.push(sliced[i].split("").reverse().join(""));
  }
  return result.join(" ");
};
