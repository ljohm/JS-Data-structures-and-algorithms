// 2. 선형 탐사(Linear Probing): 새 원소  추가시 인덱스가 이미 점유된 상태라면
// 인덱스 + 1을 찾아보고, 인덱스 + 1도 점유됐다면 인덱스 + 2를 찾아보는 식으로 충돌을 회피함.

function HashLinearProbing() {
  var table = [];

  var ValuePair = function (key, value) {
    this.key = key;
    this.value = value;

    this.toString = function () {
      return "[" + this.key + " - " + this.value + "]";
    };
  };

  var loseloseHashCode = function (key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  };

  var hashCode = function (key) {
    return loseloseHashCode(key);
  };

  this.put = function (key, value) {
    var position = hashCode(key);
    console.log(position + " - " + key);

    if (table[position] == undefined) {
      table[position] = new ValuePair(key, value);
    } else {
      var index = ++position;
      while (table[index] != undefined) {
        index++;
      }
      table[index] = new ValuePair(key, value);
    }
  };

  this.get = function (key) {
    var position = hashCode(key);

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        return table[position].value;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
          return table[index].value;
        }
      }
    }
    return undefined;
  };

  this.remove = function (key) {
    var position = hashCode(key);

    if (table[position] !== undefined) {
      if (table[position].key === key) {
        table[position] = undefined;
      } else {
        var index = ++position;
        while (table[index] === undefined || table[index].key !== key) {
          index++;
        }
        if (table[index].key === key) {
          table[index] = undefined;
        }
      }
    }
  };

  this.print = function () {
    for (var i = 0; i < table.length; ++i) {
      if (table[i] !== undefined) {
        console.log(i + " -> " + table[i].toString());
      }
    }
  };
}
