// 941. Vaiid Mountain Array

let validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }

  let prev = arr[0];
  let index = 1;
  let increase = 0;
  let decrease = 0;

  while (prev < arr[index]) {
    prev = arr[index];
    increase++;
    index++;
    // 중요!! prev가 원소값보다 작거나 커야만
    // index 증가
  }

  while (prev > arr[index]) {
    prev = arr[index];
    decrease++;
    index++;
  }

  return index === arr.length && increase > 0 && decrease > 0;
};

let arr = [2, 0, 2];
console.log(validMountainArray(arr));

// Math.max() 메소드 사용법
// let max = Math.max(...arr); => arr의 max값
// let maxIndex = arr.indexOf(max); => max값의 위치
