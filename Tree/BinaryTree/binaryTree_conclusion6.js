// 297. Serialize and Deserialize Binary Tree(unsolved)

let serialize = function (root) {
  let string = "";

  function buildString(node) {
    if (!node) {
      string += "null ";
    } else {
      string += node.val + " ";
      buildString(node.left);
      buildString(node.right);
    }
  }

  buildString(root);

  return string;
};

let deserialize = function (data) {
  let nodes = data.split(" ");

  function buildTree() {
    let val = nodes.shift();

    if (val === "null") {
      return null;
    } else {
      let node = new TreeNode(Number(val));
      node.left = buildTree();
      node.right = buildTree();
      return node;
    }
  }

  return buildTree();
};
