// 209. Minimum Size Subarray Sum

let minSubArrayLen = function (target, nums) {
  let left = 0,
    right = 0,
    sum = 0,
    result = 0;

  while (right < nums.length) {
    // 포인터가 전체 사이즈를 넘어가지 않을때까지
    sum += nums[right]; // 포인터가 가리키는 원소를 누적합
    while (sum >= target) {
      // 누적합이 target보다 크거나 같을때 계속 반복
      let len = right - left + 1; // 현재까지 누적합된 배열의 길이
      if (result === 0 || len < result) {
        result = len; // 가장 작은 len으로 result 갱신
      }
      sum -= nums[left]; // sum에서 left포인터가 가리키는 원소만큼을 빼고
      left++; // left 포인터 이동
    }
    right++; // 누적합이 target보다 작아졌을때 right 포인터 이동
  }
  return result;
};

console.log(minSubArrayLen(4, [1, 4, 4]));
