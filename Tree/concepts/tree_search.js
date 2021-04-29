// 트리노드 검색 유형: 최대값 찾기, 최소값 찾기, 특정값 찾기

//1. 최소값 찾기
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

  this.min = function () {
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

// 2. 최대값 찾기
this.max = function () {
  return maxNode(root); // 루트를 제외한 다르 위치에 노드를 추가할 경우 프라이빗 헬퍼 function을 사용.
};

let maxNode = function (node) {
  if (node) {
    while (node && node.right !== null) {
      node = node.right;
    }
    return node.key;
  }
  return null;
};

// 3. 특정값 찾기
this.search = function () {
  return searchNode(root, key);
};

let searchNode = function (node, key) {
  if (node === null) {
    return false;
  }
  if (key < node.key) {
    return searchNode(node.left, key);
  } else if (key > node.key) {
    return searchNode(node.right, key);
  } else {
    return true;
  }
};
