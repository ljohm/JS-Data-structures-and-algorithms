// 394. Decode String

function decodeString(s) {
  let stack = [];
  let curNum = 0;
  let curString = "";
  for (let c of s) {
    if (c === "[") {
      // 괄호 시작되면 stack에 push, cur 초기화
      stack.push(curString);
      stack.push(curNum);
      curNum = 0;
      curString = "";
    } else if (c === "]") {
      // 괄호 닫히면 stack에 저장된 숫자만큼
      // stack에 저장된 문자열 반복
      let num = stack.pop();
      let prevString = stack.pop();
      curString = prevString + curString.repeat(parseInt(num));
    } else if (parseInt(c) || c === "0") {
      curNum = curNum * 10 + parseInt(c);
    } else {
      curString += c;
    }
  }
  return curString;
}

// console.log(decodeString("3[a2[c]]"));
console.log(typeof parseInt("0"));
