// 22. Generate Parentheses

// backtracking solution
// let generateParenthesis = function (n) {
//   const res = [];

//   function go(left, right, s) {
//     // l: left remaining, r: right remaining
//     if (left > right) {
//       return;
//     } // The number of '(' should be always >= ')'

//     if (left === 0 && right === 0) {
//       res.push(s);
//       return;
//     }

//     if (left > 0) {
//       go(left - 1, right, s + "(");
//     }
//     if (right > 0) {
//       go(left, right - 1, s + ")");
//     }
//   }

//   go(n, n, "");
//   return res;
// };

// recursive solution
let generateParenthesis = function (n) {
  function myFunction(left, right, arr) {
    //Boundary
    if (left <= 0) {
      if (right > 0) {
        for (let i = 0; i < right; i++) {
          arr += ")";
        }
      }
      result.push(arr);
      return;
    }

    myFunction(left - 1, right + 1, arr + "(");
    if (right > 0) {
      myFunction(left, right - 1, arr + ")");
    }
  }

  let result = [];

  myFunction(n - 1, 1, "(");
  return result;
};

console.log(generateParenthesis(3));
