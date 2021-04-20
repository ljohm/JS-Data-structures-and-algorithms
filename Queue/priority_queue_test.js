// 우선순위 큐(Priority queue): 원소가 우선순위에 따라 추가되고 삭제됨
// ex) 비행기 탑승(1등석 - 비즈니스석, 응급실)

// 1. 우선순위를 설정해 원소를 정확한 위치에 추가하는 방식
function PriorityQueue() {
  let items = [];

  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.enqueue = function (element, priority) {
    let queueElement = new QueueElement(element, priority);

    if (this.isEmpty()) {
      items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
      if (!added) {
        items.push(queueElement);
      }
    }
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
    console.log(items);
  };
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 2);
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print(); //Jack(1) -> Camila(1) -> John(2)

// 2. 순서대로 추가하되 삭제만 우선순위에 따르는 방식
