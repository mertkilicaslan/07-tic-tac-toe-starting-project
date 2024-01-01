import { useState, useEffect } from "react";

import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { checkTicTacToeWinner } from "./check-winner";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const INITIAL_PLAYERS = {
  X: "Player-1",
  O: "Player-2",
};

const App = () => {
  const [activePlayer, setActivePlayer] = useState("X");
  const [players, setPlayers] = useState(INITIAL_PLAYERS);
  const [gameBoard, setGameBoard] = useState(INITIAL_GAME_BOARD);
  const [gameLog, setGameLog] = useState([]);
  const [gameStatus, setGameStatus] = useState(null);

  useEffect(() => {
    const gameInfo = checkTicTacToeWinner(gameBoard); // return null if game continues else winner status
    if (gameInfo) {
      setGameStatus(gameInfo);
    }
  }, [gameBoard]);

  const handlePlayAMove = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map((innerArr) => [...innerArr])];
      updatedBoard[rowIndex][colIndex] = activePlayer;
      return updatedBoard;
    });

    handleGameLog(rowIndex, colIndex, activePlayer);
    handleSwitchPlayer();
  };

  const handleGameLog = (rowIndex, colIndex, activePlayer) => {
    setGameLog((prevTurns) => [
      {
        square: { row: rowIndex, col: colIndex },
        player: activePlayer,
      },
      ...prevTurns,
    ]);
  };

  const handleSwitchPlayer = () => {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  };

  const handleRematchGame = () => {
    setGameStatus(null);
    setGameLog([]);
    setGameBoard(INITIAL_GAME_BOARD);
    setPlayers(INITIAL_PLAYERS);
    setActivePlayer("X");
  };

  const handleNewPlayerNameSave = (symbol, newName) => {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: newName,
    }));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            defaultName={players.X}
            symbol="X"
            isActive={activePlayer === "X"}
            handleNewPlayerNameSave={handleNewPlayerNameSave}
          />
          <Player
            defaultName={players.O}
            symbol="O"
            isActive={activePlayer === "O"}
            handleNewPlayerNameSave={handleNewPlayerNameSave}
          />
        </ol>
        {gameStatus && (
          <GameOver
            winner={players[gameStatus]}
            handleRematchGame={handleRematchGame}
          />
        )}
        <GameBoard
          gameStatus={gameStatus}
          gameBoard={gameBoard}
          handlePlayAMove={handlePlayAMove}
        />
      </div>
      <Log gameLog={gameLog} />
    </main>
  );
};

export default App;
