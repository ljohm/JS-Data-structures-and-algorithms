// 328. Odd Even Linked List

let oddEvenList = function (head) {
  if (!head) {
    return head;
  }

  let odd = head;
  let even = head.next;
  while (odd.next && odd.next.next) {
    let tmp = odd.next;
    odd.next = odd.next.next;
    odd = odd.next;
    tmp.next = odd.next;
  }
  odd.next = even;
  return head;
};
