// 3. Longest Substring Without Repeating Characters(unsolved)

// 1 - hash map solution
// let lengthOfLongestSubstring = function (s) {
//   let start = 0,
//     maxLen = 0;
//   let map = new Map();

//   for (let i = 0; i < s.length; i++) {
//     let ch = s[i];

//     if (map.get(ch) >= start) {
//       start = map.get(ch) + 1;
//     }

//     map.set(ch, i);
//     maxLen = Math.max(maxLen, i - start + 1);
//   }

//   return maxLen;
// };

// 2 - hash set solution
let lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let maxSubstringLength = 0;

  while (right < s.length) {
    if (set.has(s.charAt(right))) {
      set.delete(s.charAt(left));
      left++;
    } else {
      set.add(s.charAt(right));
      maxSubstringLength = Math.max(maxSubstringLength, set.size);
      right++;
    }
  }
  return maxSubstringLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
