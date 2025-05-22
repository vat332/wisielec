const GameWord = (props) => {
  return (
    <section className="mt-5 flex flex-wrap items-center justify-center gap-2 text-4xl font-bold md:gap-5 md:text-9xl">
      {props.letterElements}
    </section>
  );
};

export default GameWord;
