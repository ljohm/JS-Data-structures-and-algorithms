// 27. Remove Element

let removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

let arr = [3, 2, 2, 3];
console.log(removeElement(arr, 3));
