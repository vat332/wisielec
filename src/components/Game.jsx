import { useState } from "react";
import languages from "../data/constans";
import Button from "./Button";
import GameStatus from "./GameStatus";
import GameWord from "./GameWord";
import Keyboard from "./Keyboard";
import Languages from "./Languages";

const Game = () => {
  const [currentWord, setCurrentWord] = useState("react");
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const [guessedLetters, setGuessedLetters] = useState([]);
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  function handleLetterClick(letter) {
    setGuessedLetters((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }
  const letterElements = currentWord.split("").map((letter, index) => (
    <span
      key={index}
      className="w-15 py-4 uppercase border-b-4 text-center font-light bg-gray-700"
    >
      {guessedLetters.includes(letter) ? letter : "_"}
    </span>
  ));

  const renderGameStatus = () => {
    return (
      <section>
        {isGameOver ? (
          isGameWon ? (
            <GameStatus isGameWon={isGameWon} />
          ) : (
            <GameStatus isGameLost={isGameLost} />
          )
        ) : null}
      </section>
    );
  };
  return (
    <div className="md:max-w-[800px] justify-center items-center">
      {renderGameStatus()}

      <section className="gap-2 flex flex-wrap justify-center items-center mt-10 text-2xl font-bold">
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
          letters={alphabet}
          onLetterClick={handleLetterClick}
          currentWord={currentWord}
          guessedLetters={guessedLetters}
        />
      </section>

      {isGameOver && <Button />}
    </div>
  );
};

export default Game;
