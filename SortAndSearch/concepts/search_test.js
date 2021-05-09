// 순차 검색: 가장 비효율적인 검색 알고리즘.

let sequentialSearch = function (item) {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return i;
    }
  }
  return -1;
};

// 이진 검색: up/down 게임과 같은 형식. 먼저 자료구조의 정렬이 끝나있어야 적용할 수 있음.

let binarySearch = function (item) {
  quickSort();

  let low = 0,
    high = array.length - 1,
    mid,
    element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    element = array[mid];
    if (element < item) {
      low = mid - 1;
    } else if (element > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
