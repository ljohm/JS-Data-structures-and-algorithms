// 중위 순회: 이진 탐색 트리의 노드를 오름차순으로 방문(트리 정렬)
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

  this.inOrderTraverse = function (callback) {
    // => 노드 방문시 수행할 콜백 함수 -> 방문자 패턴
    inOrderTraverseNode(root, callback);
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

  let inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      // 재귀함수 중단지점
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };
}

let printNode = function (value) {
  console.log(value);
};

let tree = new BinarySearchTree();
tree.insert(13);
tree.insert(10);

tree.inOrderTraverse(printNode);

// 전위 순회: 자식노드보다 노드 자신을 먼저 방문 => 구조화된 문서 출력에 이용
let preOrderTraverseNode = function (node, callback) {
  if (node !== null) {
    callback(node.key);
    preOrderTraverseNode(node.left, callback);
    preOrderTraverseNode(node.right, callback);
  }
};

// 후위 순회: 자식노드를 노드 자신보다 먼저 방문. => 디렉토리, 서브 디렉토리의 파일 용량 계산시 이용
let postOrderTraverseNode = function (node, callback) {
  if (node !== null) {
    postOrderTraverseNode(node.left, callback);
    postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }
};
