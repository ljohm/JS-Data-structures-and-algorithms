// 752. Open the Lock

let openLock = function (deadends, target) {
  let q = [target]; // BFS 큐!!
  let distance = {}; // target부터 "0000"까지 몇번 움직였는지 저장
  distance[target] = 0;
  // target의 distance를 0으로 설정하고
  // 그로부터 +1, -1될 때 마다 각각의 distance값이 1씩 증가됨.
  // +1되거나 -1된 숫자로부터 또 파생되면 그로부터 또 1씩 증가 (반복)

  let getNextPositions = function (pos) {
    // 큐에 쌓여있던 숫자 문자열을 분해해서 증감하는 메소드
    let dir = [-1, 1];
    let arr = pos.split("");
    let positions = []; // 큐에서 떼어온 숫자 문자열에서 증감한 숫자들을 저장하는 배열 공간. 다 되면 이 배열을 리턴.
    let i, j;

    for (i = 0; i < 2; i++) {
      for (j = 0; j < 4; j++) {
        let next = [...arr];
        let n = (10 + parseInt(arr[j]) + dir[i]) % 10;
        next[j] = n; // set our 1 change
        positions.push(next.join("")); // 문자열화 시켜서 position에 push
      }
    }
    return positions;
  };

  while (q.length) {
    let pos = q.shift();

    if (pos === "0000") {
      return distance[pos]; // "0000"이 될 때 종료
    } else {
      let next = getNextPositions(pos); // 큐에서 떼어온 문자열을 메소드로 전달해서 증감된 배열들을 받아옴
      next.forEach((n) => {
        // 받아온 증감 배열을 검사(전에 숫자판을 돌려서 이미 맞췄던 숫자인지, deadends에 해당되는 숫자인지)
        if (distance[n] === undefined && !deadends.includes(n)) {
          distance[n] = distance[pos] + 1;
          q.push(n); // 검사된 숫자 문자열을 큐에 삽입 (반복)
        }
      });
    }
  }
  return -1;
};

let deadends = ["0201", "0101", "0102", "1212", "2002"],
  target = "0202";

console.log(openLock(deadends, target));
