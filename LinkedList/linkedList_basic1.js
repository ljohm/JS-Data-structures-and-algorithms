// 206. Reverse Linked List

let reverseList = function (head) {
  let pre = null; // 첫번째 노드가 next로 연결할 노드
  while (head) {
    const next = head.next; // 처리 방향
    head.next = pre; // head의 next를 이전 node로 연결
    pre = head; // 다음 순서로 pre 이동
    head = next; // next로 head 이동
  }
  return pre;
};
