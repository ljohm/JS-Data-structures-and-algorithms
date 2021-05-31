// 421. Maximum XOR of Two Numbers in an Array(unsolved)

let findMaximumXOR = (nums, max = 0) => {
  let root = {};

  for (let x of nums) {
    let xor = 0;
    let cur = root,
      alt = root;

    for (let i = 31; i >= 0; i--) {
      let p = 0 < (x & (1 << i)) ? 1 : 0,
        q = p ^ 1;
      cur = cur[p] = cur[p] || {};
      if (alt[q]) (alt = alt[q]), (xor ^= 1 << i);
      else alt = alt[p];
    }
    max = Math.max(max, xor);
  }
  return max;
};
