// 노드 삭제
function BinarySearchTree() {
  let Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  let root = null; // Tree에서의 Root는 LinkedList에서의 Head와 같음.

  this.insert = function (key) {
    let newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  this.remove = function (key) {
    root = removeNode(root, key);
  };

  this.findMinNode = function () {
    return minNode(root);
  };

  let minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };

  let removeNode = function (node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      // 1. 리프 노드(자식 노드  X)
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // 2. 자식이 하나뿐인 노드
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // 3. 자식이 둘인 노드
      let aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };

  let insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };
}
