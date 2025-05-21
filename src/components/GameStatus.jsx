const GameStatus = (props) => {
  const gameWon = {
    title: "Wygrałeś👑",
    message: "🎉Wisielec Uratowany🎉",
    backgroundColor: "bg-green-900",
  };
  const gameLost = {
    title: "Przegrałeś😢",
    message: "Nie udało się uratować wisielca 😢",
    backgroundColor: "bg-red-900",
  };
  return (
    <section
      className={`flex flex-col items-center justify-center gap-4 p-4 text-center mt-10 ${
        props.isGameWon ? gameWon.backgroundColor : gameLost.backgroundColor
      } rounded-full shadow-lg p-10`}
    >
      <h2 className="text-6xl font-bold ">
        {props.isGameWon ? gameWon.title : gameLost.title}
        <span className="text-4xl mt-8 flex justify-center text-yellowish-50">
          {props.isGameWon ? gameWon.message : gameLost.message}
        </span>
      </h2>
    </section>
  );
};

export default GameStatus;
