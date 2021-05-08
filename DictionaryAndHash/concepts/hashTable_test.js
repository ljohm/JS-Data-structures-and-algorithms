// HashTable(=HashMap): Dictionary 클래스의 해시 구현
// Hashing: 자료구조에서 특정 값을 가장 신속하게 찾는 방법.
// 이전까지는 특정 값을 찾기 위해 전체 원소에 루프문을 실행했었지만 해시함수는 키에 해당하는 값의 "주소"를 테이블에서 찾아줌.

function HashTable() {
  let table = [];

  let loseloseHashCode = function (key) {
    // loselose함수란 key를 구성하는 각 문자의 아스키값을 더한 값을 해시값으로 사용하는 함수.
    // HashTable의 프라이빗 메소드
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i); // 문자별 아스키값을 누적 합
    }
    return hash % 37;
  };

  this.put = function (key, value) {
    let position = loseloseHashCode(key);
    console.log(position + " - " + key);
    table[position] = value;
  };

  this.get = function (key) {
    return table[loseloseHashCode(key)];
  };

  this.remove = function (key) {
    table[loseloseHashCode(key)] = undefined;
  };

  this.print = function () {
    for (let i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ": " + table[i]);
      }
    }
  };
}

let hash = new HashTable();
hash.put("Gandalf", "gandalf@email.com");
hash.put("John", "johnsnow@email.com");
hash.put("Tyrion", "tyrion@email.com");

console.log(hash.get("Gandalf"));
hash.print();

// 아스키 코드를 더한 해시값이 동일한 원소가 해시 테이블에 추가될 수 있음
// => 그러면 이전 원소에서 마지막에 추가된 원소로 내용이 변경됨. 값이 사라져버른 자료구조란 있을 수 없음..
// => 처리방법: 1. 체이닝, 2. 선형 탐사, 3. 이중 해싱

// loseloseHash보다 성능이 좋은 해시 함수 => djb2 해시 함수
let djb2HashCode = function (key) {
  let hash = 5381; // 해시 변수를 임의 소수로 초기화
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i); // 매직 넘버(33)를 곱하고 각 문자의 아스키값과 더한다
  }
  return hash % 1013;
};
