const GameStatus = ({
  isGameOver,
  isGameWon,
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
      <div className="flex h-33 flex-col items-center justify-center rounded-full bg-purple-800 p-5 text-center text-white shadow-lg">
        <h1 className="text-3xl font-bold">{farewellText}</h1>
      </div>
    );
  }

  if (isGameOver) {
    const status = isGameWon ? gameWon : gameLost;

    return (
      <section
        className={`flex h-35 flex-col items-center justify-center gap-4 p-5 text-center ${status.backgroundColor} rounded-full text-white shadow-lg`}
      >
        <h2 className="text-3xl font-bold">{status.title}</h2>
        <span className="text-3xl">{status.message}</span>
      </section>
    );
  }

  return null;
};

export default GameStatus;
