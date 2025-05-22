const GameStatus = ({
  isGameOver,
  isGameWon,
  isGameLost,
  isLastGuessedIncorrect,
  farewellText,
}) => {
  const gameWon = {
    title: "Wygrałeś 👑",
    message: "🎉 Wisielec uratowany! 🎉",
    backgroundColor: "bg-green-900",
  };

  const gameLost = {
    title: "Przegrałeś 😢",
    message: "Nie udało się uratować wisielca 😢",
    backgroundColor: "bg-red-900",
  };

  if (isLastGuessedIncorrect && !isGameOver && farewellText) {
    return (
      <div className="flex flex-col items-center justify-center p-5 h-33 text-center bg-purple-800 text-white rounded-full shadow-lg">
        <h1 className="text-3xl font-bold">{farewellText}</h1>
      </div>
    );
  }

  if (isGameOver) {
    const status = isGameWon ? gameWon : gameLost;

    return (
      <section
        className={`flex flex-col items-center justify-center gap-4 p-5 h-35 text-center  ${status.backgroundColor} text-white rounded-full shadow-lg`}
      >
        <h2 className="text-3xl font-bold">{status.title}</h2>
        <span className="text-3xl">{status.message}</span>
      </section>
    );
  }

  return null;
};

export default GameStatus;
