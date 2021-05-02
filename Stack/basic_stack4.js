// 150. Evaluate Reverse Polish Notation

let evalRPN = function (tokens) {
  let stack = [];
  let sum = 0;

  for (let i = 0; i < tokens.length; i++) {
    if (
      stack.length > 0 &&
      (tokens[i] === "*" ||
        tokens[i] === "/" ||
        tokens[i] === "+" ||
        tokens[i] === "-")
    ) {
      switch (tokens[i]) {
        case "*":
          sum = stack.pop() * stack.pop();
          break;
        case "/":
          sum = Math.trunc((1 / stack.pop()) * stack.pop()); // 스택에 저장한 수를 꺼내 연산해야 하므로 순서 주의
          break;
        case "+":
          sum = stack.pop() + stack.pop();
          break;
        case "-":
          sum = -stack.pop() + stack.pop(); // 스택에 저장한 수를 꺼내 연산해야 하므로 순서 주의2
          break;
      } // 나눗셈, 뺄셈시 주의!!
      stack.push(sum); // 연산자에 따라 계산하고 스택에 저장
    } else {
      stack.push(parseInt(tokens[i])); // 원소가 숫자면 스택에 일단 저장
    }
  }
  return stack[0];
};

console.log(evalRPN(["4", "13", "5", "/", "+"]));
