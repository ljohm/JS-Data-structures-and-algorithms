// 739. Daily Temperatures

var dailyTemperatures = function (temperatures) {
  let res = Array(temperatures.length).fill(0);
  // 배열 후반부로 갈수록 자기 자신보다 높은 온도가 없을 수도 있으므로 배열 생성후 전부 0으로 초기화
  let stack = [];
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let j = stack.pop();
      res[j] = i - j;
    }
    stack.push(i); // stack에 인덱스 저장
  }
  return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
