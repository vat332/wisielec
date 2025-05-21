import { useState } from "react";
import languages from "../data/constans";
import GameWord from "./GameWord";
import Languages from "./Languages";
const Game = () => {
  const [currentWord, setCurrentWord] = useState("react");
  const letterElements = currentWord.split("").map((letter, index) => (
    <span
      key={index}
      className="w-15 py-4 uppercase border-b-4 text-center font-light bg-gray-700"
    >
      {letter}
    </span>
  ));

  return (
    <>
      <section className="gap-2 flex flex-wrap justify-center items-center mt-10 text-2xl font-bold">
        {languages.map((language) => (
          <Languages
            key={language.name}
            name={language.name}
            backgroundColor={language.backgroundColor}
            color={language.color}
          />
        ))}
      </section>
      <GameWord letterElements={letterElements} />
    </>
  );
};

export default Game;
