// 142. Linked List Cycle 2(unsolved)
// cycle이 시작되는 노드를 리턴

let detectCycle = function (head) {
  let tortoise = head;
  let hare = head;
  while (hare && hare.next) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (tortoise === hare) {
      tortoise = head;
      while (tortoise !== hare) {
        tortoise = tortoise.next;
        hare = hare.next;
      }
      return tortoise;
    }
  }
  return null;
};
