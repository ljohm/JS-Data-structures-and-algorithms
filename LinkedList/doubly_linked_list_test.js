// 이중 연결 리스트(Doubly Linked List)
// 일반 연결 리스트는 다음 노드의 연결 정보만 갖고있지만
// 이중 연결 리스트는 다음 노드, 이전 노드의 정보 전부 가지고 있음. => 양방향 순회 가능

function DoublyLinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  };

  let length = 0;
  let head = null;
  let tail = null; // <- NEW!

  this.insert = function (position, element) {
    if (position >= 0 && position <= length) {
      let node = new Node(element),
        current = head,
        previous,
        index = 0;

      if (position === 0) {
        if (!head) {
          head = node;
          tail = node;
        } else {
          node.next = current;
          current.prev = node; // <- new!
          head = node;
        }
      } else if (position === length) {
        //??
        // <- new!
        current = tail;
        current.next = node;
        node.prev = current;
        tail = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      length++;
      return true;
    } else {
      return false;
    }
  };

  this.removeAt = function (position) {
    if (position > -1 && position < length) {
      let current = head,
        previous,
        index = 0;

      if (position === 0) {
        head = current.next;
        if (length === 1) {
          tail = null;
        } else {
          head.prev = null;
        }
      } else if (position === length - 1) {
        current = tail;
        tail = current.prev;
        tail.next = null;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;
      }
      length--;
      return current.element;
    } else {
      return null;
    }
  };
}

// let dl = DoublyLinkedList();
// dl.insert(0, 1);
// console.log(dl);
