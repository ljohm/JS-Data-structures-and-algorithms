// 1346. Check If N and Its Double Exist

let checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i] * 2) !== -1 && arr[i] !== 0) {
      return true;
    } else if (arr[i] === 0 && arr.indexOf(0) !== i) {
      return true; // 값이 0인 원소가 두개일 경우 ex) [0, 0]
    }
  }
  return false;
};

// indexOf()도 있고 includes()도 있음
// includes()는 boolean으로 리턴.

let arr = [-2, 0, 10, -19, 4, 6, -8];
console.log(checkIfExist(arr));
let arr2 = [0, 0, 0];
console.log(checkIfExist(arr2));
