import Game from "./components/Game";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="flex flex-col justify-center items-center p-[2rem]">
      <Header />
      <Game />
    </main>
  );
};

export default App;
