const Keyboard = (props) => {
  return (
    <section>
      <div className="flex flex-wrap justify-center items-center mt-10 text-3xl font-bold gap-2">
        {props.letters.split("").map((letter, index) => {
          const isGuessed = props.guessedLetters.includes(letter);
          const isCorrect = isGuessed && props.currentWord.includes(letter);
          const isWrong = isGuessed && !props.currentWord.includes(letter);
          const buttonStyle = isGuessed
            ? isCorrect
              ? "bg-green-500"
              : "bg-red-500"
            : "bg-yellow-400";
          return (
            <button
              key={index}
              className={`w-16 py-4 uppercase text-center font-bold ${buttonStyle} w-max-[450px] text-black border-1 border-white rounded-lg hover:bg-yellow-500 transition duration-300 ease-in-out cursor-pointer`}
              onClick={() => props.onLetterClick(letter)}
            >
              {letter}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-center items-center mt-10 text-3xl font-bold gap-2">
        <button className="mt-4 py-4 px-20 bg-blue-400 text-black text-5xl font-bold rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out cursor-pointer text-white">
          Nowa gra
        </button>
      </div>
    </section>
  );
};

export default Keyboard;
