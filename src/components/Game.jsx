import { useState } from "react";
import ReactConfetti from "react-confetti";
import languages from "../data/constans";
import { getFarewellText, getRandomWord } from "../data/utils";
import Button from "./Button";
import GameStatus from "./GameStatus";
import GameWord from "./GameWord";
import Keyboard from "./Keyboard";
import Languages from "./Languages";

const Game = () => {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [guessedLetters, setGuessedLetters] = useState([]);
  const isGameWon = currentWord.name
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }
  console.log(currentWord.name);
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.name.includes(letter),
  ).length;
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessedIncorrect =
    lastGuessedLetter && !currentWord.name.includes(lastGuessedLetter);
  function handleLetterClick(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }
  const letterElements = currentWord.name.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const shouldRevealLetter = isGameLost || isGuessed;

    const textColor = isGameLost && !isGuessed ? "text-red-500" : "text-white";

    return (
      <span
        key={index}
        className={`w-15 border-b-4 bg-gray-700 py-4 text-center font-light uppercase ${textColor} md:my-6 md:w-35`}
      >
        {shouldRevealLetter ? letter : "_"}
      </span>
    );
  });

  const renderGameStatus = () => {
    return (
      <section className="min-h-[100px] md:min-h-[150px]">
        <GameStatus
          isGameOver={isGameOver}
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          isLastGuessedIncorrect={isLastGuessedIncorrect}
          farewellText={
            isLastGuessedIncorrect && !isGameOver
              ? getFarewellText(languages[wrongGuessCount - 1].name)
              : null
          }
        />
      </section>
    );
  };

  return (
    <div className="items-center justify-center md:max-w-[1000px]">
      {isGameWon && <ReactConfetti recycle={false} numberOfPieces={1000} />}
      {renderGameStatus()}
      <div className="mb-4 text-center text-3xl font-semibold text-gray-300">
        Kategoria:{" "}
        <span className="text-yellow-400">{currentWord.category}</span>
      </div>

      <section className="flex flex-wrap items-center justify-center gap-2 text-xl font-bold">
        {languages.map((language, index) => {
          const isLanguageLost = index < wrongGuessCount;

          return (
            <Languages
              key={language.name}
              name={language.name}
              backgroundColor={language.backgroundColor}
              color={language.color}
              isLost={isLanguageLost}
            />
          );
        })}
      </section>

      <section className="flex flex-col items-center justify-center">
        <GameWord letterElements={letterElements} />
        <Keyboard
          disabled={isGameOver}
          letters={alphabet}
          aria-disabled={isGameOver}
          onLetterClick={handleLetterClick}
          currentWord={currentWord}
          guessedLetters={guessedLetters}
        />
      </section>

      {isGameOver && <Button startNewGame={startNewGame} />}
    </div>
  );
};

export default Game;
