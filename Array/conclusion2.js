// 414. Third Maximum Number

let thirdMax = function (nums) {
  let set = new Set(nums);
  let arr = [...set]; // Set 객체의 배열화

  arr.sort((a, b) => {
    return b - a;
  });

  if (arr.length < 3) {
    return Math.max(...arr);
  }

  return arr[2];
};

let arr = [1, 2];
console.log(thirdMax(arr));
// let set = new Set(arr);
// console.log(set);
// console.log(Array.from(set));
console.log(arr);
