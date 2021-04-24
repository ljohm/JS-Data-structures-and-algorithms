// 26. Remove Duplicates from Sorted Array(again)

let removeDuplicates = function (arr) {
  let prev = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (prev === arr[i]) {
      arr.splice(i, 1); // splice()는 원본배열에 영향!!
      i--;
    } else {
      prev = arr[i];
    }
  }
  return arr.length;
};

let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(arr));
console.log(arr);
