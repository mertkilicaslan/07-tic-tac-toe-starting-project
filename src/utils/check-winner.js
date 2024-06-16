export const checkTicTacToeWinner = (board) => {
  // Check for a winner in rows, columns, and diagonals
  for (let i = 0; i < 3; i++) {
    // Check rows and columns
    if (
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2] &&
      board[i][0] != null
    ) {
      return board[i][0]; // Winner in row
    }
    if (
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i] &&
      board[0][i] != null
    ) {
      return board[0][i]; // Winner in column
    }
  }

  // Check diagonals
  if (
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] &&
    board[0][0] != null
  ) {
    return board[0][0]; // Winner in diagonal
  }
  if (
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] &&
    board[0][2] != null
  ) {
    return board[0][2]; // Winner in diagonal
  }

  // Check for draw or game continues
  return board.flat().every((cell) => cell !== null) ? "DRAW" : null;
};
