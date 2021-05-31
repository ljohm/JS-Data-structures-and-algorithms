// Trie: N-ary 트리의 특별한 형태. 주로 문자열을 저장.
// array, hash map등으로 구현

// 208. Implement Trie (Prefix Tree)
class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (!node[c]) {
        node[c] = {};
      }
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (!node) {
        return null;
      }
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node !== null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) !== null;
  }
}
