// Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

// The Sudokus tested against your function will be "easy" (i.e. determinable; there will be no need to assume and test possibilities on unknowns) and can be solved with a brute-force approach.

// For Sudoku rules, see the Wikipedia article.

var puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

// sudoku(puzzle);

// Should return
// [
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9],
// ];

const getSquareNumbers = (array, rowIndex, colIndex) => {
  const startRow = Math.floor(rowIndex / 3) * 3;
  const startCol = Math.floor(colIndex / 3) * 3;

  const squareNumbers = [];

  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (typeof array[i][j] === "number") {
        squareNumbers.push(array[i][j]);
      }
    }
  }

  return squareNumbers;
};

const checkCellNumbers = (cell, [rowIndex, colIndex], array) => {
  const currentRow = array[rowIndex].filter((cell) => typeof cell === "number");
  const currentCol = array
    .map((row) => row[colIndex])
    .filter((cell) => typeof cell === "number");
  const currentSquare = getSquareNumbers(array, rowIndex, colIndex);

  const possibleNumbers = cell.filter(
    (numberVariants) =>
      !currentRow.includes(numberVariants) &&
      !currentCol.includes(numberVariants) &&
      !currentSquare.includes(numberVariants)
  );

  return possibleNumbers.length === 1 ? possibleNumbers[0] : possibleNumbers;
};

const sudoku = (puzzle) => {
  var ThreeDimensionalPuzzle = puzzle.map((row) =>
    row.map((cell) => (cell === 0 ? [1, 2, 3, 4, 5, 6, 7, 8, 9] : cell))
  );

  let isSolved = false;

  while (!isSolved) {
    ThreeDimensionalPuzzle = ThreeDimensionalPuzzle.map(
      (row, rowIndex, array) =>
        row.map((cell, colIndex) =>
          typeof cell === "number"
            ? cell
            : (cell = checkCellNumbers(cell, [rowIndex, colIndex], array))
        )
    );

    isSolved = ThreeDimensionalPuzzle.every((row) =>
      row.every((cell) => typeof cell !== "object")
    );
  }

  return ThreeDimensionalPuzzle;
};

// Done!

// Smart solution:
// function sudoku(a, x = 0, y = 0) {
//   function next(x, y) {
//     if (++y == 9) x++, (y = 0);
//     return x == 9 ? a : sudoku(a, x, y);
//   }
//   function getFree(x, y) {
//     let [xx, yy] = [~~(x / 3) * 3, ~~(y / 3) * 3];
//     let nums = a[x]
//       .concat(a[0].map((_, i) => a[i][y]))
//       .concat(
//         a.slice(xx, xx + 3).reduce((p, c) => p.concat(c.slice(yy, yy + 3)), [])
//       );
//     return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((v) => !nums.includes(v));
//   }
//   a = a.slice().map((x) => x.slice());
//   return a[x][y]
//     ? next(x, y)
//     : getFree(x, y).reduce((ans, n) => ((a[x][y] = n), ans || next(x, y)), 0);
// }
