// 430. Flatten a Multilevel Doubly Linked List

let flatten = function (head) {
  let temp = head;
  let stack = [];

  while (head) {
    if (head.child) {
      if (head.next) {
        stack.push(head.next);
      }
      head.next = head.child;
      head.next.prev = head;
      head.child = null;
    } else if (!head.next && stack.length > 0) {
      head.next = stack.pop();
      head.next.prev = head;
    }
    head = head.next;
  }
  return temp;
};
