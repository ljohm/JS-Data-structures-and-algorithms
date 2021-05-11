// 142. Linked List Cycle 2(unsolved)

let detectCycle = function (head) {
  let hare = head;
  let tortoise = head;
  let index = 0;

  while (hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    index++;

    if (hare === tortoise) {
      return `tail connects to node index ${index + 1}`;
    }
  }
  return false;
};

let detectCycle2 = function (head) {
  let slow = head;
  let fast = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      while (head !== fast) {
        head = head.next;
        fast = fast.next;
      }
      return head;
    }
  }
  return null;
};
