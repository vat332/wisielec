import Game from "./components/Game";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="flex flex-col items-center justify-center p-[2rem]">
      <Header />
      <Game />
    </main>
  );
};

export default App;
