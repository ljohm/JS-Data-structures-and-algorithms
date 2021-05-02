// 20. Valid Parentheses

let isValid = function (s) {
  let map = {
    // 각 괄호의 짝을 정한 오브젝트 생성
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      arr.push(s[i]); // 시작 괄호면 배열로 push
    } else if (arr[arr.length - 1] === map[s[i]]) {
      arr.pop();
      // 닫힌 괄호면서 배열에 저장된 시작 괄호의 짝이면
      // 배열의 시작 괄호 pop
    } else {
      return false; // 해당 없을 때 false 리턴
    }
  }
  return arr.length === 0; // 정상적이라면 배열의 길이가 0 ex) 괄호가 안닫히고 몇개 열려있는 경우 등
};

console.log(isValid("({)}"));
