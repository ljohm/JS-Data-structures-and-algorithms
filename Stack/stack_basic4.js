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
          sum = Math.trunc((1 / stack.pop()) * stack.pop());
          break;
        case "+":
          sum = stack.pop() + stack.pop();
          break;
        case "-":
          sum = -stack.pop() + stack.pop();
          break;
      } // 나눗셈, 뺄셈시 주의!!
      stack.push(sum);
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  return stack[0];
};

console.log(evalRPN(["4", "13", "5", "/", "+"]));
