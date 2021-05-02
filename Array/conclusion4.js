// 977. Squares of a Sorted Array

// let sortedSquares = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] * nums[i];
//   }
//   nums.sort((a, b) => {
//     return a - b;
//   });
//   return nums;
// };

let sortedSquares = function (nums) {
  // O(n)으로 처리하기 위해 sort메소드 사용X
  const res = Array(nums.length).fill(0);
  let left = 0; // left 포인터 좌측 끝에 지정(첫번째 인덱스)
  let right = nums.length - 1; // right 포인터 우측 끝으로 지정(마지막 인덱스)
  let index = nums.length - 1;
  while (left <= right) {
    //
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      res[index] = nums[left] * nums[left];
      left++;
    } else {
      res[index] = nums[right] * nums[right];
      right--;
    }
    index--;
  }
  return res;
};

// 왼쪽 포인터가 가리키는 값이 오르쪽의 값보다 크면 res 배열 마지막 인덱스에 제곱값을 넣어 변경
// 주의 - left 포인터는 right 포인터보다 항상 작거나 같아야 함.

let arr = [-4, -1, 0, 3, 6, 10];
console.log(sortedSquares(arr));
