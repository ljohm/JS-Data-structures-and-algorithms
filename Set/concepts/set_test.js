function Set() {
  let items = {};

  this.has = function (value) {
    // value가 집합에 포함되어 있는지?
    // return value in items;
    return items.hasOwnProperty(value);
  };

  this.add = function (value) {
    if (!this.has(value)) {
      items[value] = value;
      // key값과 value값을 동일하게 저장
      // => key값을 순환하며 출력
      return true;
    }
    return false;
  };

  this.remove = function (value) {
    if (this.has(value)) {
      delete items[value]; // 객체 삭제
      return true;
    }
    return false;
  };

  this.clear = function () {
    items = {};
  };

  this.size = function () {
    // 1. length 변수를 선언해서 add/remove할때마다 증감
    // 2. Object 클래스에 내장된 함수 이용
    return Object.keys(items).length;
    // 3. 거의 모든 브라우저에서 몇개인지 count
    // let count = 0;
    // for (let prop in items) {
    //   if (items.hasOwnProperty(prop)) {
    //     count++;
    //   }
    //   return count;
    // }
  };

  this.values = function () {
    // 1. 모든 프로퍼티 추출해서 배열 형태로 변환
    return Object.keys(items);
    //2.
    // let keys = [];
    // for (let key in items) {
    //   // 각 프로퍼티 순회
    //   keys.push(key);
    // }
    // return keys;
  };

  this.union = function (otherSet) {
    // 합집합
    let unionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }
    return unionSet;
  };

  this.intersection = function (otherSet) {
    // 교집합
    let intersectionSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }
    return intersectionSet;
  };

  this.difference = function (otherSet) {
    // 차집합
    let differenceSet = new Set();
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      if (!otherSet.has(values[i])) {
        differenceSet.add(values[i]);
      }
    }
    return differenceSet;
  };

  this.subset = function (otherSet) {
    // 부분집합(A의 모든원소는 반드시 B에 존재)
    if (this.size() > otherSet.size()) {
      return false;
    } else {
      let values = this.values();
      for (let i = 0; i < values.length; i++) {
        if (!otherSet.has(values[i])) {
          return false;
        }
      }
      return true;
    }
  };
}

// let set = new Set();
// set.add(1);
// set.add(5);
// set.add(9);
// console.log(set.values());
// set.remove(5);
// console.log(set.values());

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(4);
setB.add(5);
setB.add(6);
setB.add(3);

let unionAB = setA.union(setB);
console.log(unionAB.values());

let intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());

let differenceAB = setA.difference(setB);
console.log(differenceAB.values());

// function속 객체에 접근할 수 없는 이유
// delete가 하는일
// hasOwnProperty()
// Object.keys()
