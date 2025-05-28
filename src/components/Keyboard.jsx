const Keyboard = (props) => {
  console.log(props.disabled);
  return (
    <section>
      <div className="mt-5 mb-5 flex flex-wrap items-center justify-center gap-2 text-3xl font-bold md:max-w-[500px] md:gap-3 md:text-6xl">
        {props.letters.split("").map((letter, index) => {
          const isGuessed = props.guessedLetters.includes(letter);

          const isCorrect =
            isGuessed && props.currentWord.name.includes(letter);

          const buttonStyle = isGuessed
            ? isCorrect
              ? "bg-green-500"
              : "bg-red-500"
            : "bg-yellow-400";
          return (
            <button
              aria-disabled={props.disabled}
              disabled={props.disabled}
              key={index}
              className={`w-16 p-3 text-center font-bold uppercase ${buttonStyle} w-max-[450px] rounded-lg border-1 border-white text-black transition duration-300 ease-in-out md:w-23 ${
                props.disabled
                  ? "cursor-not-allowed grayscale-70"
                  : "cursor-pointer"
              } ${!props.disabled ? "hover:bg-yellow-500" : ""}`}
              onClick={() => props.onLetterClick(letter)}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default Keyboard;
