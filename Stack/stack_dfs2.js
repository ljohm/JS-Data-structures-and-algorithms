// 133. Clone Graph

// let cloneGraph = function (node) {
//   if (node === null) {
//     return null;
//   }
//     const map = new Map();
//     const clone = (root) => {
//       if (!map.has(root.val)) {
//         map.set(root.val, new Node(root.val));
//         map.get(root.val).neighbors = root.neighbors.map(clone);
//       }
//       return map.get(root.val);
//     };

//   return clone(node);
// };

let deepCopy = function (arr) {
  if (arr === null || typeof arr !== "object") {
    return arr;
  }

  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    copy[i] = deepCopy(arr[i]);
  }
  return copy;
};

let adjList = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
];

console.log(deepCopy(adjList));
// console.log(typeof []);
