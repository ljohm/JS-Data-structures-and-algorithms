// 133. Clone Graph(깊은 복사)

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
    // arr가 비었거나 배열이 아니라 그냥 숫자원소일 때, 별 처리 없이 리턴
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
