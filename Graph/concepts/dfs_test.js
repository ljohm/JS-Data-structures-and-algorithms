// DFS: 시작 정점에서 출발해서 동일 경로의 마지막 정점까지 순회하고 다시 반대방향으로 돌아와
// 다음 경로를 찾아가는 식으로 진행. 깊이 방향으로 정점들을 방문한 후, 너비 방향으로 움직임.
// BFS와의 차이점: DFS는 시작 정점이 필요 없고

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

  this.dfs = function (callback) {
    var color = initializeColor();

    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === "white") {
        dfsVisit(vertices[i], color, callback);
      }
    }
  };

  var dfsVisit = function (u, color, callback) {
    color[u] = "grey";
    if (callback) {
      callback(u);
    }
    console.log("방문했음 " + u);
    var neighbors = adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === "white") {
        dfsVisit(w, color, callback);
      }
    }
    color[u] = "black";
    console.log("탐색했음 " + u);
  };

  var time = 0;
  this.DFS = function () {
    var color = initializeColor(),
      d = [],
      f = [],
      p = [];
    time = 0;

    for (var i = 0; i < vertices.length; i++) {
      f[vertices[i]] = 0;
      d[vertices[i]] = 0;
      p[vertices[i]] = null;
    }

    for (i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === "white") {
        DFSVisit(vertices[i], color, d, f, p);
      }
    }

    return {
      discovery: d,
      finished: f,
      predecessors: p,
    };
  };

  var DFSVisit = function (u, color, d, f, p) {
    console.log("방문했음 " + u);
    color[u] = "grey";
    d[u] = ++time;
    var neighbors = adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === "white") {
        p[w] = u;
        DFSVisit(w, color, d, f, p);
      }
    }
    color[u] = "black";
    f[u] = ++time;
    console.log("탐색했음 " + u);
  };
}

// console.log('********* dfs ***********');

// graph.dfs();

// console.log('********* 위상 정렬 - DFS ***********');

// //var result = graph.DFS();
// //console.log(result.discovery);
// //console.log(result.finished);
// //console.log(result.predecessors);

// graph = new Graph();

// myVertices = ['A','B','C','D','E','F'];
// for (i=0; i<myVertices.length; i++){
//     graph.addVertex(myVertices[i]);
// }
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('B', 'D');
// graph.addEdge('B', 'E');
// graph.addEdge('C', 'F');
// graph.addEdge('F', 'E');

// var result = graph.DFS();
// console.log(result.discovery);
// console.log(result.finished);
// console.log(result.predecessors);

// var fTimes = result.finished;
// s = '';
// for (var count=0; count<myVertices.length; count++){
//     var max = 0;
//     var maxName = null;
//     for (i=0; i<myVertices.length; i++){
//         if (fTimes[myVertices[i]] > max){
//             max = fTimes[myVertices[i]];
//             maxName = myVertices[i];
//         }
//     }
//     s += ' - ' + maxName;
//     delete fTimes[maxName];
// }
// console.log(s);
