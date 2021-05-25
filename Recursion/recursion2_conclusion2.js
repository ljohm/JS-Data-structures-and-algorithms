// 46. Permutations

// recursive solution
// let permute = function (nums) {
//   let out = [];

//   if (nums.length < 2) {
//     // If single arr, do nothing
//     return [nums];
//   } else if (nums.length == 2) {
//     // If size 2, return the two permutations
//     out.push([nums[0], nums[1]]);
//     out.push([nums[1], nums[0]]);
//   } else {
//     // Any other amount
//     for (let idx = 0; idx < nums.length; idx++) {
//       // Walk through array removing each item temporarily
//       let tmp = nums.splice(idx, 1);

//       // Get permutations for sub array using array copy
//       let permutations = permute(nums.slice());

//       // Add current index item to beginning of all permutations
//       permutations.forEach((item) => {
//         item.unshift(tmp);
//       });

//       // Add to output array
//       out = out.concat(permutations);

//       // Return index
//       nums.splice(idx, 0, tmp);
//     }
//   }

//   return out;
// };

// backtracking solution
let permute = function (nums) {
  const res = [];

  function go(cur, rest) {
    if (rest.length === 0) {
      res.push(cur);
      return;
    }

    for (let i = 0; i < rest.length; i++) {
      // note if using array push and splice here, it will cause mutation
      go([...cur, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  }

  go([], nums);
  return res;
};

let s = [1, 2, 3];
console.log(s.slice(0, 1));
console.log(s);
