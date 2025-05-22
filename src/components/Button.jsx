const Button = (props) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-3xl font-bold">
      <button
        className="cursor-pointer rounded-lg bg-blue-400 px-20 py-4 text-5xl font-bold text-white transition duration-300 ease-in-out hover:bg-blue-500"
        onClick={() => props.startNewGame()}
      >
        Nowa gra
      </button>
    </div>
  );
};

export default Button;
