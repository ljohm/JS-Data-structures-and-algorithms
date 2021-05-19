// 387. First Unique Character in a String

let firstUniqChar = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], -1);
    } else {
      map.set(s[i], i);
    }
  }

  let firstUniqIndex = -1;

  for (const [key, index] of map) {
    if (index !== -1) {
      firstUniqIndex = index;
      break;
    }
  }

  return firstUniqIndex;
};
