const GameStatus = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 p-4 text-center mt-10 bg-green-900 rounded-full shadow-lg p-10">
      <h2 className="text-6xl font-bold ">
        Wygrałeś👑
        <span className="text-4xl mt-8 flex justify-center text-yellowish-50">
          🎉Uratowałeś Wisielca🎉
        </span>
      </h2>
    </section>
  );
};

export default GameStatus;
