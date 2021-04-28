let car = {
  wheel: 4,
  engine: 4,
  color: {
    sheet: "brown",
    handle: "black",
    outlook: "white",
  },
};

let bike = {};

console.log(Object.keys(car)); // car오브젝트의 키를 배열화

Object.keys(car).map((n) => {
  // 얕은복사의 방법
  // 얕은 복사(shallow copy): 새로운 객체에 원본 객체의
  // 속성과 값을 그대로 복사
  bike[n] = car[n];
});

console.log("car:", car);
console.log("bike:", bike);

// bike.color.handle = "red";

console.log("car:", car);
console.log("bike:", bike);
// => 얕은복사한 요소중에 객체 요소(참조 필요)가 있었다면..?
// 제대로 복사X.. 같은 주소를 참조하고 있음
// 원본 객체나 복사된 객체에서 해당 객체 요소를 변경하면
// 둘다 내용이 변경됨(같은 주소를 참조하기 때문에)
