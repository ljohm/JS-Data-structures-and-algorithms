// 429. N-ary Tree Level Order Traversal

// recursive solution
let levelOrder = function (root) {
  function traverseLevel(node, depth) {
    if (node) {
      if (!result[depth]) {
        result[depth] = [];
      }
      result[depth].push(node.val);
    }

    for (const child of node.children) {
      traverseLevel(child, depth + 1);
    }
  }

  const result = [];

  if (!root) {
    return result;
  }

  traverseLevel(root, 0);
  return result;
};

// iterative solution
// let levelOrder = function (root) {
//   if (root == null) {
//     return [];
//   }

//   const result = []; /* this will hold the desired result */
//   const queue = [root]; /* init with root */

//   while (queue.length > 0) {
//     const levelSize =
//       queue.length; /* get the size of the queue at this point */
//     const level = []; /* init empty array for the values of the current level */
//     for (let i = 0; i < levelSize; i++) {
//       /* loop over the values ONLY for this level */
//       const head =
//         queue.shift(); /* remove the head element and retain in a variable */
//       for (const child of head.children) {
//         queue.push(
//           child
//         ); /* enqueue each child so we can process their values */
//       }
//       level.push(head.val); /* process the current node's value */
//     }
//     result.push(level); /* we are finished with this level */
//   }
//   return result;
// };
