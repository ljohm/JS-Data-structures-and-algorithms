// 141. Linked List Cycle
// 순환 리스트 안에 사이클이 있다면 true, 아니면 false
// => tortoise보다 한 노드씩 앞서가는 hare를 설정해서 비교

let hasCycle = function (head) {
  let hare = head;
  let tortoise = head;
  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if (tortoise === hare) {
      return true;
    }
  }
  return false;
};

console.log(hasCycle([3, 2, 0, -4]));
