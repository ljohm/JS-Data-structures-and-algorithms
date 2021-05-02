// 94. Binary Tree Inorder Traversal
// 중위 탐색

let inorderTraversal = function (root) {
  const stack = []; // 탐색 공간
  const res = []; // 최종 저장 공간

  while (root || stack.length) {
    // root가 null, stack이 비어있을 때 loop stop
    if (root) {
      // root가 존재 할 경우
      stack.push(root);
      root = root.left;
    } else {
      // root는 존재하지 않지만 stack에 데이터가 있는 경우
      // => 현재 root가 null일 때
      root = stack.pop(); // root를 다시 상위 노드로 변경
      res.push(root.val);
      root = root.right;
    }
  }

  return res;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(1, null, new TreeNode(2, 3, null));

console.log(inorderTraversal(root));
