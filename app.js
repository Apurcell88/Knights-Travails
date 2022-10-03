// build a function that shows the shortest possible way to get from one square to
// another by outputting all squares the knight will stop on along the way.
class KnightBoard {
  constructor() {
    this.adjacentList = {};
  }

  addSquare(x, y) {
    // adds a square as a key to the adjacency hash table
    this.adjacentList[[x, y]] = [];
    return [x, y];
  }

  addEdge(s1, s2) {
    this.adjacentList[s1].push(s2);
  }

  positions(x, y, n) {
    const square = this.addEdge(x, y);

    if ((x + 2 < n) && (y + 1 < n)) {
      this.addEdge(square, [x + 2, y + 1]);
    }
    if ((x - 2 >= 0) && (y + 1 < n)) {
      this.addEdge(square, [x - 2, y + 1]);
    }
    if ((x + 2 < n) && (y - 1 >= 0)) {
      this.addEdge(square, [x + 2, y - 1]);
    }
    if ((x - 2 >= 0) && (y - 1 >= 0)) {
      this.addEdge(square, [x - 2, y - 1]);
    }
    if ((x + 1 < n) && (y + 2 < n)) {
      this.addEdge(square, [x + 1, y + 2]);
    }
    if ((x + 1 < n) && (y - 2 >= 0)) {
      this.addEdge(square, [x + 1, y - 2]);
    }
    if ((x - 1 >= 0) && (y + 2 < n)) {
      this.addEdge(square, [x - 1, y + 2]);
    }
    if ((x - 1 >= 0) && (y - 2 >= 0)) {
      this.addEdge(square, [x - 1, y - 2]);
    }
  }

  allPositions(x, y, n) {
    // creates the board
    if (!this.adjacentList[`${x},${y}`]) {
      this.positions(x, y, n);
      this.adjacentList[`${x},${y}`].map((child) => {
        {
          this.allPositions(child[0], child[1], n);
        }
      });
    }
  }
}
