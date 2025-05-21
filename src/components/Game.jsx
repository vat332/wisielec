import languages from "../data/constans";
import Languages from "./Languages";
const Game = () => {
  return (
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
  );
};

export default Game;
