// 3. 검색과 정렬

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// 3-1. reverse: 원소 순서를 거꾸로 바꾸기
numbers.reverse();
console.log(numbers);

// 3-2. sort:
numbers.sort();
console.log(numbers);
// -> sort는 기본적으로 모든 원소를 문자열 취급하여 사전적으로 정렬하기 때문에 1 다음 원소로 10이 온다.

numbers.sort(function (a, b) {
  return a - b;
  // b가 a보다 크면 양수, a가 b보다 크면 음수, 같으면 0 반환하는 숫자 정렬 로직
  // a - b일때 오름차순, b - a일때 내림차순
});
console.log(numbers);

// 위와 같은 공식
// function compare(a, b) {
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//   return 0; //a = b
// }
// numbers.sort(compare);
// console.log(numbers);

// 3-3. 사용자 정의 정렬
let friends = [
  { name: "John", age: 34 },
  { name: "Camile", age: 21 },
  { name: "Jack", age: 30 },
];

function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

console.log(friends.sort(comparePerson));

// 3-4. 문자열 정렬
let names = ["Ana", "ana", "john", "John"];
console.log(names.sort()); // -> ["Ana", "John", "ana", "john"]으로 출력됨. 문자의 아스키 값을 비교하기 때문.

//대소문자 구별 없이 문자를 비교하는 함수
function compareFunction(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
}
console.log(names.sort(compareFunction)); // -> ["Ana", "ana", "John", "john"]

// 3-5. 검색: indexOf, lastIndexOf
console.log(numbers.indexOf(10)); // "10"의 인덱스 번호 -> 9
console.log(numbers.indexOf(100)); // "100"의 인덱스 번호 -> -1(없음)

numbers.push(10);
console.log(numbers.lastIndexOf(10)); // "10"을 만족하는 (중복하는 인덱스 값 중)마지막 인덱스 번호 -> 15
console.log(numbers.lastIndexOf(100)); // "100"을 만족하는 마지막 인덱스 번호 -> -1(없음)
