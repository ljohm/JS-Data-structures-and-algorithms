// 26. Remove Duplicates from Sorted Array
// 중복 원소 값 삭제 후 길이 반환

let removeDuplicates = function (arr) {
  let cur = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === cur) {
      arr.splice(i, 1);
      i--;
    } else {
      cur = arr[i];
    }
  }
  return arr.length;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
console.log(nums);
