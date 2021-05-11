// 19. Remove Nth Node From End of List

let removeNthFromEnd = function (head, n) {
  let nullHead = new ListNode(null);
  nullHead.next = head;
  let p1 = nullHead;
  let p2 = nullHead;

  for (let i = 0; i < n + 1; i++) {
    p1 = p1.next; //
  }
  while (p1 !== null) {
    p2 = p2.next;
    p1 = p1.next;
  }
  p2.next = p2.next.next;
  return nullHead.next;
};
