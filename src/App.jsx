import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

const App = () => {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player defaultName="Player1" symbol="X" />
          <Player defaultName="Player2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
};

export default App;
