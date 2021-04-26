// 스택(Stack): LIFO(Last In First Out, 후입선출) 원리로 정렬된 컬렉션.
// 항상 동일한 종단점에서 추가 / 삭제됨. (top / base)

function Stack() {
  let items = [];

  this.push = function (element) {
    items.push(element);
  };

  this.pop = function () {
    return items.pop();
  };

  this.peek = function () {
    return items[items.length - 1];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.size = function () {
    return items.length;
  };

  this.clear = function () {
    return [];
  };

  this.print = function () {
    console.log(items.toString());
  };
}

let stack = new Stack();
console.log(stack.isEmpty());

stack.push(5);
stack.push(8);
console.log(stack.peek());

stack.push(11);
console.log(stack.size());
console.log(stack.isEmpty());

console.log("----------");
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size());
stack.print();
console.log(stack.pop());
stack.print();

// 10진수 -> 2진수
function divideBy2(decNumber) {
  let remStack = new Stack(),
    rem,
    binaryString = "";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));

// 10진수 -> 2진수 / 8진수 / 16진수
function baseConverter(decNumber, base) {
  let remStack = new Stack(),
    rem,
    baseString = "",
    digits = "0123456789ABCDEF";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    baseString += digits[remStack.pop()];
  }
  return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
