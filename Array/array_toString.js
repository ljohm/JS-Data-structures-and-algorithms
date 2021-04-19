// 4. 배열을 문자열로 변환: toString, join

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//toString: 배열의 모든 원소를 단일 문자열로 바꿀 때
console.log(numbers.toString()); // -> 1, 2, 3, 4, 5, 6, 7, 8, ...

//join: 단순히 배열 원소들끼리 묶거나 구부자를 두고 문자열로 묶고싶을 때
let numberString = numbers.join("-");
console.log(numberString); // -> 1-2-3-4-5-6-7-8-...
