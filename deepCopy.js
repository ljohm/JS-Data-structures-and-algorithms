// 깊은복사(deep copy): 얕은 복사와는 달리
// 객체 요소도 저장공간을 따로 만들어 완벽하게 복사.
// => 재귀함수, JSON, 라이브러리 사용으로 깊은복사 가능

let car = {
  wheel: 4,
  engine: 4,
  color: {
    sheet: "brown",
    handle: "black",
    outlook: "white",
  },
};

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let copy = {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}

let perfectBike = deepCopy(car);
perfectBike.color.handle = "pink";
console.log("car:", car);
console.log("deep copied bike:", perfectBike);
// console.log(typeof car.color);
