/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  if (board.length !== 9) return false;

  for (let i = 0; i < 9; i++) {
    console.log(board[i], "row");
    if (board[i].length !== 9) return false;

    let rowNums = {};
    for (let j = 0; j < 9; i++) {
      rowNums[j] = (rowNums[j] || 0) + 1;
    }
    console.log(rowNums);

    // for (let item in rowNums) {
    //   if (item !== "." && rowNums[item] > 1) return false;
    // }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
