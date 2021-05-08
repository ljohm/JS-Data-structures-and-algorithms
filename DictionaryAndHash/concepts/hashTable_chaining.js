// 1. 체이닝(Chaining): 테이블 인덱스별로 연결 리스트를 생성해서 그안에 원소를 저장하는 기법.
// 충돌을 해결하는 가장 단순한 방법. 그러나 해시 테이블 인스턴스 외에 추가 메모리가 소요된다는 단점이 있음.
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

  let ValuePair = function (key, value) {
    // 객체에 key와 value를 저장하는 역할의 클래스
    this.key = key;
    this.value = value;

    this.toString = function () {
      return "[" + this.key + " - " + this.value + "]";
    };
  };

  this.put = function (key, value) {
    let position = loseloseHashCode(key);
    // 해당 원소가 들어갈 위치가 비어있다면 LinkedList 인스턴스 생성 후
    if (table[position] === undefined) {
      table[position] = new LinkedList();
    }
    table[position].append(new ValuePair(key, value)); // append 메소드로 인스턴스를 만들어 덧붙임.
  };

  this.get = function (key) {
    let position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      // 해시 테이블에 원소가 존재한다면
      let current = table[position].getHead(); // current에 헤드를 담아두고
      while (current.next) {
        // next가 null이 될 때까지 LinkedList 순회
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        // 원소가 리스트의 처음/마지막이라면
        return current.element.value;
      }
    }
    return undefined; // 존재하지 않는 원소라면 undefined 반환
  };

  this.remove = function (key) {
    let position = loseloseHashCode(key);

    if (table[position] !== undefined) {
      let current = table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          table[position].remove(current.element);
          if (table[position].isEmpty()) {
            table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      if (current.element.key === key) {
        table[position].remove(current.element);
        if (table[position].isEmpty()) {
          table[position] = undefined;
        }
        return true;
      }
    }

    return false;
  };

  this.print = function () {
    for (let i = 0; i < table.length; i++) {
      if (table[i] !== undefined) {
        console.log(i + ": " + table[i]);
      }
    }
  };
}
