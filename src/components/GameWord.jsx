const GameWord = (props) => {
  return (
    <section className="flex justify-center flex-wrap items-center mt-5 text-4xl font-bold gap-2">
      {props.letterElements}
    </section>
  );
};

export default GameWord;
