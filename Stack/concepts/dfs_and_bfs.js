// DFS(Depth First Search)
// : stack을 이용한 자료구조.
// 깊이 우선으로 탐색하다가 갈곳이 없으면 정점으로 돌아감.
// 단계별로 재귀호출을 하면서 그떄그때 스택에 저장.
// (재귀 호출을 하면 스택이 생성)

// BFS(Breadth First Search)
// : queue를 이용한 자료구조.
// 현재 정점에서 갈 수 있는 노드를 모두 큐에 넣음.
// 그전에 해당 노드를 방문했다고 체크
// BFS와 반대로 DFS는 일단 방문 후에 체크함.
// loop 호출로 구현.

let arr = [1, 2, 3, 4, 5];
let str = "hello world!";

console.log(arr.length);
console.log(str.length);

let set = new Set();
set.add(1);
set.add(3);
set.add(5);

console.log(set.size);
console.log(set);
