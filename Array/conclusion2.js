// 414. Third Maximum Number

let thirdMax = function (nums) {
  let set = new Set(nums); // 중복 원소 없는 set 객체 생성
  let arr = [...set]; // Set 객체의 배열화

  arr.sort((a, b) => {
    // set 배열 내림차순 정렬
    return b - a;
  });

  if (arr.length < 3) {
    // 배열 길이가 3보다 작을때 => 그냥 최대값 출력
    return Math.max(...arr);
  }

  return arr[2]; // 최종 세번째에 위치한 원소 출력
};

let arr = [1, 2];
console.log(thirdMax(arr));
