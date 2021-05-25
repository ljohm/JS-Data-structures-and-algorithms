// 24. Swap Nodes in Pairs(unsolved)

let swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let temp = head.next;

  head.next = temp.next;
  temp.next = head;
  head.next = swapPairs(head.next);

  return temp;
};
