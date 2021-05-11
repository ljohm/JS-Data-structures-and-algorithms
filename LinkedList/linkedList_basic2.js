// 203. Remove Linked List Elements

let removeElements = function (head, val) {
  let curr = head;
  let prev = null;

  while (curr) {
    if (curr.val === val) {
      // val이 일치하는데
      if (prev) {
        // prev가 존재할 때
        prev.next = curr.next;
      } else {
        // prev가 없는 첫번째 노드일 때
        head = curr.next;
      }
    } else {
      // val이 일치하지 않을때
      prev = curr; // prev 위치 변경
    }

    curr = curr.next; // curr 위치 변경
  }

  return head;
};
