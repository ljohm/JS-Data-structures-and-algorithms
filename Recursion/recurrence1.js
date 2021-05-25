// 206. Reverse Linked List

// recursive solution
let reverseList = function (head) {
  const helper = (current, prev) => {
    if (current === null) {
      return prev;
    }
    // next node
    let next = current.next;
    // append previous nodes in current
    current.next = prev;
    return helper(next, current);
  };

  return helper(head, null);
};

// non recursive solution
// let reverseList = function (head) {
//   let prev = null;
//   while (head) {
//     const next = head.next;
//     head.next = prev;
//     prev = head;
//     head = next;
//   }
//   return prev;
// };
