// 347. Top K Frequent Elements(unsolved)

let topKFrequent = function (nums, k) {
  const n = nums.length;
  const freq = new Map();

  for (const num of nums) {
    if (!freq.get(num)) freq.set(num, 0);
    freq.set(num, freq.get(num) + 1);
  }

  const buckets = [];

  for (let i = 0; i <= n; i++) {
    buckets[i] = [];
  }

  for (const [num, count] of freq) {
    buckets[count].push(num);
  }

  const res = [];

  for (let i = n; i >= 0 && k > 0; i--) {
    if (buckets[i].length > 0) {
      k -= buckets[i].length;
      res.push(...buckets[i]);
    }
  }

  return res;
};
