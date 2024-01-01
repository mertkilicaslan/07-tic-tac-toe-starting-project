import React from "react";

const GameBoard = ({ gameBoard, handlePlayAMove, gameStatus }) => {
  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => (
                <li key={colIndex}>
                  <button
                    onClick={() => handlePlayAMove(rowIndex, colIndex)}
                    disabled={gameBoard[rowIndex][colIndex] || gameStatus}
                  >
                    {col}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
};

export default GameBoard;
