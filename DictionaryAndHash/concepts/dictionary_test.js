// 집합(set)처럼 딕셔너리와 해시는 유일한 값을 저장하기 위한 자료구조
// 집합은 원소의 값에 초점을 두었다면,
// 딕셔너리는 값을 [키, 값] 형태로 저장.
// 해시도 [키, 값]으로 저장하지만 구현방식이 다름.

// Dictionary: 데이터를 [키, 값] 쌍으로 담아두는 자료구조.
// key는 원소를 찾기위한 식별자.
// Dictionary = Map

function Dictionary() {
  let items = {};

  this.has = function (key) {
    return key in items;
  };

  this.set = function (key, value) {
    items[key] = value;
  };

  this.remove = function (key) {
    if (this.has(key)) {
      delete items[key];
      return true;
    }
    return false;
  };

  this.get = function (key) {
    return this.has(key) ? items[key] : undefined;
  };

  this.values = function () {
    // key가 아닌 value 출력
    let values = [];
    for (let k in items) {
      values.push(items[k]);
    }
    return values;
  };

  this.keys = function () {
    // key값(이름)만 출력
    return Object.keys(items);
  };

  this.clear = function () {
    items = {};
  };

  this.size = function () {
    return Object.keys(items).length;
  };

  this.getItems = function () {
    return items;
  };
}

let dictionary = new Dictionary();
dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("John", "johnsnow@email.com");
dictionary.set("Tyrion", "tyrion@email.com");

console.log(dictionary.size());
console.log(dictionary.has("Gandalf"));
console.log(dictionary.keys());

dictionary.remove("John");

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());
console.log(dictionary.get("Gandalf"));
