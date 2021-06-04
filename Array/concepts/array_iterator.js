// 2. 반복자 함수: every, some, forEach, map, filter, reduce

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let isEven = function (x) {
  console.log(x);
  return x % 2 === 0;
};

//2-1. every: 함수의 결과값이 false가 될 때까지 배열의 모든 원소를 돌아가며 반복
//numbers.every(isEven); // -> 첫번째 인자에서부터 false이므로 딱 한번만 실행되고 종료

// 2-2. some: 함수의 결과값이 true가 될 때까지 배열의 모든 원소를 돌아가며 반복
//numbers.some(isEven); // -> 두번째 인자에서 true가 반환되므로 두번째 반복만 실행하고 종료

// 2-3. forEach: 조건에 상관없이 배열의 모든 원소 반복. 내부에 함수코드를 가짐. for과 동일.
// numbers.forEach((x) => {
//   console.log(x % 2 == 0);
// });

//2-4. map: 수행 결과를 새 객체로 반환
// let myMap = numbers.map(isEven);
// console.log(myMap);

// 2-5. filter: 함수의 결과값을 true로 만드는 원소로만 구성된 새 배열 반환
// let evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// 2-6. reduce: 배열 원소 값의 총합을 구할때 유용
console.log(
  numbers.reduce((previous, current, index) => {
    return previous + current; // 120 출력
  })
);
