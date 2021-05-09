// 그래프(Graph): 비선형 자료구조. 네트워크 구조를 추상화한 모델. 간선(edge)로 연결된 노드(정점)의 집합.
// 인접 정점: 간선으로 바로 연결된 정점.
// 차수(degree): 인접 정점의 개수
// 경로(path): 일련의 연속된 정점.
// 단순 경로: 반복된 정점을 포함하지 않는 경로.
// 사이클(cycle): 처음과 마지막 정점이 같은 단순 경로.

// 방향 그래프(directed graph): 간선들이 한쪽으로 방향을 가진 그래프.
// 무방향 그래프(undirected graph): 간선에 방향성이 없는 그래프.

// 인접 행렬로 그래프를 표현하는 것은 메모리 효율에 좋지 않기 때문에
// 인접 리스트로 리스트(배열)/연결 리스트/해시 맵/딕셔너리를 사용해서 구현할 수 있음.

function Graph() {
  let Dictionary = function () {
    let items = {};

    this.has = function (key) {
      return key in items;
    };

    this.set = function (key, value) {
      items[key] = value;
    };

    this.remove = function (key) {
      if (this.has(key)) {
        delete items[key];
        return true;
      }
      return false;
    };

    this.get = function (key) {
      return this.has(key) ? items[key] : undefined;
    };

    this.values = function () {
      // key가 아닌 value 출력
      let values = [];
      for (let k in items) {
        values.push(items[k]);
      }
      return values;
    };

    this.keys = function () {
      // key값(이름)만 출력
      return Object.keys(items);
    };

    this.clear = function () {
      items = {};
    };

    this.size = function () {
      return Object.keys(items).length;
    };

    this.getItems = function () {
      return items;
    };
  };

  let vertices = [];
  let adjList = new Dictionary(); // 정점 명칭과 인접 정점 리스트를 키-값으로 가짐.

  this.addVertex = function (v) {
    //정점 추가 메소드
    vertices.push(v);
    adjList.set(v, []); // 키가 v이고 값은 빈 배열인 딕셔너리를 인접 리스트로 세팅.
  };

  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v); // 무방향 그래프 이므로 쌍방으로 간선을 추가
  };

  this.toString = function () {
    let s = "";
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + " -> ";
      let neighbors = adjList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  };
}

let graph = new Graph();
let myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

console.log(graph.toString());

// 그래프 순회 알고리즘 => BFS, DFS
