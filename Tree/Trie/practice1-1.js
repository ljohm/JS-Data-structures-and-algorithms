// 677. Map Sum Pairs(unsolved)

class MapSum {
  constructor(value = "") {
    this.value = value;
    this.count = 0;
    this.isWord = false;
  }

  insert(key, val) {
    let cur = this,
      replace = this.search(key);
    if (replace === false) {
      this.count += val;
      for (let i = 0, len = key.length; i < len; i++) {
        if (!cur[key[i]]) cur[key[i]] = new MapSum(cur.value + key[i]);
        cur[key[i]].count += val;
        cur = cur[key[i]];
      }
      cur.isWord = true;
    } else {
      this.count = this.count + val - replace;
      for (let i = 0, len = key.length; i < len; i++) {
        if (!cur[key[i]]) cur[key[i]] = new MapSum(cur.value + key[i]);
        cur[key[i]].count = cur[key[i]].count - replace + val;
        cur = cur[key[i]];
      }
    }
  }

  sum(prefix) {
    let cur = this;
    for (let i = 0, len = prefix.length; i < len; i++) {
      if (!cur[prefix[i]]) return 0;
      cur = cur[prefix[i]];
    }
    return cur.count;
  }

  search(key) {
    let cur = this;
    for (let i = 0, len = key.length; i < len; i++) {
      if (!cur[key[i]]) return false;
      cur = cur[key[i]];
    }
    if (cur.isWord) return cur.count;
    else return false;
  }
}
