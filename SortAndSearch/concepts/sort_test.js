function ArrayList() {
  let array = [];

  let swap = function (index1, index2) {
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };

  let merge = function (left, right) {
    let result = [],
      il = 0,
      ir = 0;

    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }
    while (il < left.length) {
      result.push(left[il++]);
    }
    while (ir < right.length) {
      result.push(right[ir++]);
    }
    return result;
  };

  let mergeSortRec = function (array) {
    let length = array.length;

    if (length === 1) {
      return array;
    }

    let mid = Math.floor(length / 2),
      left = array.slice(0, mid),
      right = array.slice(mid, length);

    return merge(mergeSortRec(left), mergeSortRec(right));
  };

  let swapQuickStort = function (array, index1, index2) {
    let aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
  };

  let partition = function (array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)],
      i = left,
      j = right;

    while (i <= j) {
      while (array[i] < pivot) {
        i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swapQuickStort(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  };

  let quick = function (array, left, right) {
    let index;
    if (array.length > 1) {
      index = partition(array, left, right);

      if (left < index - 1) {
        quick(array, left, index - 1);
      }
      if (index < right) {
        quick(array, index, right);
      }
    }
  };

  this.insert = function (item) {
    array.push(item);
  };

  this.toString = function () {
    return array.join();
  };

  // 버블 정렬(bubble sort): 인접한 두 원소를 모두 다 비교하고 그 결과에 따라 두 원소의 위치를 바꿈.
  this.bubbleSort = function () {
    let length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  };

  this.modifiedBubbleSort = function () {
    let length = array.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
        }
      }
    }
  };

  // 선택 정렬: 제자리 정렬 알고리즘의 하나. 최솟값을 찾아 맨 앞으로 보내고 그 다음으로 작은 값을 찾아
  // 두번째 위치로 보내는 형식.
  this.selectionSort = function () {
    let length = array.length,
      indexMin;
    for (let i = 0; i < length - 1; i++) {
      indexMin = i;
      for (let j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j;
        }
      }
      if (i !== indexMin) {
        swap(i, indexMin);
      }
    }
  };

  // 삽입 정렬(Insertion sort): 한번에 한원소씩 정렬된 배열을 만들어가는 알고리즘.
  this.insertionSort = function () {
    let length = array.length,
      j,
      temp;
    for (let i = 0; i < length; i++) {
      j = i;
      temp = array[i];
      while (j > 0 && array[j - 1] > temp) {
        array[j] = array[j - 1];
        j--;
      }
      array[j] = temp;
    }
  };

  // 병합 정렬(Merge sort): 가장 성능이 뛰어난 정렬 알고리즘.
  this.mergeSort = function () {
    array = mergeSortRec(array);
  };

  // 퀵 정렬(Quick sort): 성능이 좋은 알고리즘2
  this.quickSort = function () {
    this.quick(array, 0, array.length - 1);
  };
}

function createNonSortedArray(size) {
  let array = new ArrayList();
  for (let i = size; i > 0; i--) {
    array.insert(i);
  }
  return array;
}

let array = createNonSortedArray(5);
console.log("Before Bubble sort: " + array.toString());
array.modifiedBubbleSort();
console.log("After Bubble sort: " + array.toString() + "\n");

let array2 = createNonSortedArray(5);
console.log("Before Selection sort: " + array2.toString());
array.selectionSort();
console.log("After Selection sort: " + array2.toString() + "\n");
