import React from "react";

const GameOver = ({ handleRematchGame, winner }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{winner ? winner + " won the game!" : "I's a draw!"}</p>
      <p>
        <button onClick={handleRematchGame}>Rematch</button>
      </p>
    </div>
  );
};

export default GameOver;
