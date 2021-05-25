// 344. Reverse String

// recursive solution
let reverseString = function (s) {
  if (s.length === 0) {
    return;
  }

  let temp = s[0];
  s.shift();
  reverseString(s);
  s.push(temp);
};

// non recursive solution
// let reverseString = function (s) {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     let prev = s[left];
//     s[left] = s[right];
//     s[right] = prev;

//     left++;
//     right--;
//   }
//   return s;
// };

let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);
