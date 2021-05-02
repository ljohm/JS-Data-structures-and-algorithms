// 155. Min Stack

function MinStack() {
  let items = [];

  this.push = function (element) {
    items.push(element);
  };

  this.pop = function () {
    return items.pop();
  };

  this.top = function () {
    return items[items.length - 1];
  };

  this.getMin = function () {
    return Math.min(...items);
  };

  this.print = function () {
    console.log(items.toString());
  };
}

let minStack = new MinStack();
minStack.push(-1);
minStack.push(0);
minStack.push(-5);
minStack.print();
console.log(minStack.getMin());
