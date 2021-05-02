// 1089. Duplicate Zeros

let duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++; // 0(new) 0(old) 이므로 for문에서 i가 증가되기 전에 한번더 증가
    }
  }
};

let arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);
