// 1299. Replace Elements with Greatest Element on Right Side
//

// let replaceElements = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== arr.length - 1) {
//       arr[i] = Math.max(...arr.slice(i + 1));
//     } else {
//       arr[i] = -1;
//     }
//   }
//   return arr;
// };

let replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      arr[i] = Math.max(...arr.slice(i + 1)); // ***
    } else if (i === arr.length - 1) {
      arr[i] = -1;
    }
  }
  return arr;
};

let arr = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr));

// slice()
// start만 지정하면 start지점부터 배열의 끝까지
// 원본 배열을 복사해서 자름(원본 배열 변경X)
// start + end 지정도 가능
// splice()는 원본 배열 변경 O
