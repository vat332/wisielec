import Game from "./components/Game";
import GameStatus from "./components/GameStatus";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="flex flex-col justify-center p-[2rem]">
      <Header />
      <GameStatus />
      <Game />
    </main>
  );
};

export default App;
