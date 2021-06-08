// 160. Intersection of Two Linked Lists

let getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  let curA = headA;
  let curB = headB;

  while (curA !== curB) {
    curA = curA === null ? headA : curA.next;
    curB = curB === null ? headB : curB.next;
  }

  return curA;
};
