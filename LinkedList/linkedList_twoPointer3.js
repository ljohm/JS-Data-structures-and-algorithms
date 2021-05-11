// 160. Intersection of Two Linked Lists(unsolved)

let getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  var curA = headA;
  var curB = headB;

  while (curA != curB) {
    curA = curA == null ? headA : curA.next;
    curB = curB == null ? headB : curB.next;
  }

  return curA;
};
