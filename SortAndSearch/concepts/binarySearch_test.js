// Binary Search(이진 검색):
// 이진 검색이란 모든 비교후 검색 공간을 2로 나누는 알고리즘.
// (정렬되지 않은 경우)정렬 -> 이진 검색(루프/재귀 로 비교후 검색공간 반으로 나눔)
// -> 남은 공간에서 실행 후보 결정

// Binary Search Template 1
// 이진 검색의 가장 기본적인 형태.
// 인덱스에 접근해서 요소를 검색하는데 사용
// let left = 0, right = length - 1;
// left > right 일때 loop 종료
// 왼쪽 검색: right = mid - 1
// 오른쪽 검색: left = mid + 1

// Binary Search Template 2
// 이진 검색의 고급화된 방법
// 요소의 바로 옆 요소에 접근해야 함.
// 요소의 오른쪽 요소를 사용하요 조건이 충족되는지 확인하고
// 어느쪽으로 이동할 지 결정.
// 후처리가 필요. 루프/재귀는 요소가 1개 남으면 종료.
// let left = 0, right = length;
// left === right이면 종료.
// 왼쪽 검색: right = mid
// 오르쪽 검색: left = mid + 1

// Binary Search Template 3
// 현재 인덱스 및 배열에서 바로 왼쪽 및 오르쪽 인접 인덱스에
// 액세스 해야하는 요소 또는 조건을 검색하는데 사용.
// 후처리 필요. 루프/재귀에 2개의 요소가 남으면 종료.
// let left = 0, right = length - 1;
// left + 1 === right일때 종료
// 왼쪽 검색: right = mid
// 오르쪽 검색: left = mid
