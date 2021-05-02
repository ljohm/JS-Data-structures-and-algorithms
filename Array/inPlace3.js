// 283. Move Zeroes

let moveZeroes = function (nums) {
  let count = nums.length;
  for (let i = 0; i < count; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
      // splice는 배열을 리턴하므로 [0]지정!!
      i--;
      count--; // count를 감소시키지 않으면 무한루프
    }
  }
  return nums;
};

let arr = [0, 1, 2, 3, 4];
console.log(moveZeroes(arr));
