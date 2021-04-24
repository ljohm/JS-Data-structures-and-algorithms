// 905. Sort Aray By Parity
// 배열 앞부분을 짝수, 뒷부분을 홀수로

let sortArrayByParity = function (A) {
  let count = A.length;
  for (let i = 0; i < count; i++) {
    if (A[i] % 2 !== 0) {
      // 홀수일 때
      A.push(A.splice(i, 1)[0]);
      i--;
      count--;
    }
  }
  return A;
};

// filter() 메소드를 이용해서
// 짝수 배열 + 홀수 배열을 합치는 방법도 있음

let arr = [3, 1, 2, 4];
console.log(sortArrayByParity(arr));
