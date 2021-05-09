// BFS: 시작 정점에서 순회를 시작해서 그래프를 한 번에 한 층씩, 우선 이웃한 정점(인접 정점)들을 모두 방문.
// 너비 방향으로 먼저 방문하고 그 다음 깊이 방향으로 내려감.

function Graph() {
  var vertices = []; //list

  var adjList = new Dictionary();

  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []); //인접 리스트를 행렬과 함께 초기화한다
  };

  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    //adjList.get(w).push(v);
  };

  this.toString = function () {
    var s = "";
    for (var i = 0; i < vertices.length; i++) {
      s += vertices[i] + " -> ";
      var neighbors = adjList.get(vertices[i]);
      for (var j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  };

  var initializeColor = function () {
    var color = [];
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = "white";
    }
    return color;
  };

  this.bfs = function (v, callback) {
    var color = initializeColor(),
      queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[u] = "grey";
      for (var i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          queue.enqueue(w);
        }
      }
      color[u] = "black";
      if (callback) {
        callback(u);
      }
    }
  };

  this.BFS = function (v) {
    var color = initializeColor(),
      queue = new Queue(),
      d = [],
      pred = [];
    queue.enqueue(v);

    for (var i = 0; i < vertices.length; i++) {
      d[vertices[i]] = 0;
      pred[vertices[i]] = null;
    }

    while (!queue.isEmpty()) {
      var u = queue.dequeue(),
        neighbors = adjList.get(u);
      color[u] = "grey";
      for (i = 0; i < neighbors.length; i++) {
        var w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          d[w] = d[u] + 1;
          pred[w] = u;
          queue.enqueue(w);
        }
      }
      color[u] = "black";
    }

    return {
      distances: d,
      predecessors: pred,
    };
  };
}

var graph = new Graph();

var myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (var i = 0; i < myVertices.length; i++) {
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

console.log("********* 그래프 출력 ***********");

console.log(graph.toString());

console.log("********* bfs ***********");

function printNode(value) {
  console.log("방문한 정점: " + value);
}

graph.bfs(myVertices[0], printNode);
