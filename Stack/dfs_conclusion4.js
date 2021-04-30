// 841. Keys and rooms

let canVisitAllRooms = function (rooms, key = 0, keys = new Set()) {
  if (keys.has(key)) {
    return;
  }

  keys.add(key);

  rooms[key].forEach((k) => canVisitAllRooms(rooms, k, keys));

  return keys.size === rooms.length;
};

let mat = [[1, 3], [3, 0, 1], [2], [0]];
console.log(canVisitAllRooms(mat));
