// 599. Minimum Index Sum of Two Lists

let findRestaurant = function (list1, list2) {
  let map = new Map();
  let arr = [];
  let min = Infinity;
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i);
  }
  for (let i = 0; i < list2.length; i++) {
    let sum = 0;
    if (map.has(list2[i])) {
      sum = map.get(list2[i]) + i;
      if (sum < min) {
        arr = [];
        arr.push(list2[i]);
        min = sum;
      } else if (sum === min) {
        arr.push(list2[i]);
      }
    }
  }
  return arr;
};
