// 49. Group Anagrams

// sort()를 사용하지 않은 해결법
// let groupAnagrams = function (strs) {
//   let map = new Map();

//   for (str of strs) {
//     let key = 0;
//     for (let char of str) {
//       const i = char.charCodeAt(0);
//       key += Math.pow(i, 4);
//     }

//     !map.has(key)
//       ? map.set(key, [str])
//       : map.set(key, map.get(key).concat(str));
//   }

//   return Array.from(map.values());
// };

let groupAnagrams = function (strs) {
  let map = new Map();

  for (let str of strs) {
    let key = [...str].sort();
    map[key] = map[key] ? [...map[key], str] : [str];
  }

  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
