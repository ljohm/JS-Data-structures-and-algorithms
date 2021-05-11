// 21. Merge Two Sorted Lists(unsolved)

let mergeTwoLists = function (l1, l2) {
  let head = null;
  let c1 = l1;
  let c2 = l2;
  let p = head;

  while (c1 || c2) {
    if ((c1 && !c2) || (c1 && c1.val < c2.val)) {
      p.next = c1;
      c1 = c1.next;
    } else {
      p.next = c2;
      c2 = c2.next;
    }
    p = p.next;
  }
  return head.next;
};
