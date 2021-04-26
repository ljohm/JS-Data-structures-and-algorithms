// 큐(Queue): FIFO(First In First Out, 선입 선출) 원리에 따라 정렬된 컬렉션.
// ex) 출력물 인쇄 대기
// 스택과 큐 차이점: push, pop, peek <-> enqueue, dequeue, front

function Queue() {
  let items = [];

  this.enqueue = function (element) {
    // 배열 뒤쪽에 원소 추가
    items.push(element);
  };

  this.dequeue = function () {
    // 배열 앞쪽에서 첫번째 원소 반환 후 삭제
    return items.shift(); // (unshift는 배열 앞쪽에 삽입, shift는 배열 앞쪽 원소 삭제)
  };

  this.front = function () {
    return items[0];
  };

  this.isEmpty = function () {
    return items.length == 0;
  };

  this.size = function () {
    return items.length;
  };

  this.clear = function () {
    return (items = []);
  };

  this.print = function () {
    console.log(items.toString());
  };
}

let queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");
queue.print();

console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
console.log(queue.dequeue());

// 환형 큐(Circular Queue)
function hotPotato(nameList, num) {
  let queue = new Queue();
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }
  let eliminated = "";
  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminated = queue.dequeue();
    console.log(eliminated + "(을)를 퇴장시킵니다.");
  }
  return queue.dequeue();
}

let names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
let winner = hotPotato(names, 7);
console.log("승자는 " + winner + "입니다.");
