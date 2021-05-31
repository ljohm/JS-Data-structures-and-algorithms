// 1295. Find Numbers with Even Number of Digits
// 짝수 자릿수를 가진 배열 원소의 총 합

let findNumbers = function (nums) {
  let count = 0;

  for (let num of nums) {
    let digits = num.toString().length;
    if (digits % 2 === 0) {
      count++;
    }
  }
  return count;
};

let arr = [12, 345, 2, 6, 7896];
console.log(findNumbers(arr));
