// 54. Spiral Matrix

// let spiralOrder = function (matrix) {
//   const res = [];

//   while (matrix.length) {
//     const first = matrix.shift(); // [1, 2, 3]
//     res.push(...first); // ...으로 삽입해야 배열이 펼쳐짐
//     for (const m of matrix) {
//       let val = m.pop();
//       if (val) {
//         // m이 []일 경우가 있으므로 val 검사
//         res.push(val);
//       }
//       m.reverse();
//     }
//     matrix.reverse();
//   }

//   return res;
// };

// // let matrix = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];

// let matrix = [[1], [2], [3], [4]];
// console.log(spiralOrder(matrix));

// let res = [1];
// let arr = [[1]];
// console.log(arr[0].pop());
// console.log(arr);
// console.log(arr.length);
// console.log(res.push(...arr.shift()));
// console.log(arr);
// console.log(res);

let spiralOrder = function (matrix) {
  let res = [];

  while (matrix.length) {
    let first = matrix.shift();
    res.push(...first);
    for (const m of matrix) {
      let lastOne = m.pop();
      if (lastOne) {
        res.push(lastOne);
        m.reverse();
      }
    }
    matrix.reverse();
  }
  return res;
};
