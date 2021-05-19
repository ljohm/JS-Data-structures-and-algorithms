// 450. Delete Node in a BST

let deleteNode = function (root, key) {
  if (!root) {
    return null;
  }
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    // root.val === key인 경우
    if (!root.right) {
      return root.left;
    }
    if (!root.left) {
      return root.right;
    }
    // 양쪽 노드 전부 존재할때
    let n = root.right;
    while (n.left) {
      // 오르쪽 노드의 left가 있는 경우
      n = n.left;
    }
    n.left = root.left; // root.left를 n의 왼쪽에 이어붙임
    return root.right; // 수정된 root.right를 출력.
  }
  return root; // 결과: root출력
};
