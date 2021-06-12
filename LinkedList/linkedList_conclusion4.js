// 138. Copy List with Random Pointer
// => map을 사용한 깊은복사(deep copy)

let copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  const clones = new Map();
  let n = head;
  while (n) {
    clones.set(n, new Node(n.val));
    n = n.next;
  }
  n = head;
  while (n) {
    clones.get(n).next = clones.get(n.next) || null;
    clones.get(n).random = clones.get(n.random) || null;
    n = n.next;
  }
  return clones.get(head);
};

let head = [
  [7, null],
  [13, 0],
  [11, 4],
  [10, 2],
  [1, 0],
];
