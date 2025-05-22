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
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  function startNewGame() {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessedIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);
  function handleLetterClick(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }
  const letterElements = currentWord.split("").map((letter, index) => {
    const isGuessed = guessedLetters.includes(letter);
    const shouldRevealLetter = isGameLost || isGuessed;

    const textColor = isGameLost && !isGuessed ? "text-red-500" : "text-white";

    return (
      <span
        key={index}
        className={`w-15 py-4 uppercase border-b-4 text-center font-light bg-gray-700 ${textColor}`}
      >
        {shouldRevealLetter ? letter : "_"}
      </span>
    );
  });

  const renderGameStatus = () => {
    return (
      <section className="min-h-[100px]">
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
    <div className="md:max-w-[800px] justify-center items-center">
      {isGameWon && <ReactConfetti recycle={false} numberOfPieces={1000} />}
      {renderGameStatus()}

      <section className="gap-2 flex flex-wrap justify-center items-center text-2xl font-bold">
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
