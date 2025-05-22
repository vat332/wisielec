const Header = () => {
  return (
    <header className="text-center">
      <h1 className="text-yellowish-50 text-6xl font-bold md:text-8xl lg:text-9xl">
        Wisielec
      </h1>
      <p className="text-p-50 mt-4 max-w-[350px] text-3xl md:max-w-[500px] md:text-4xl lg:max-w-[600px] lg:text-5xl">
        Zgadnij słowo, zanim powiesimy wisielca! Masz na to 8 prób.
        <span className="mt-2 mb-4 flex justify-center text-4xl font-extrabold text-white md:text-6xl lg:text-7xl">
          Powodzenia!!!🤞🏼
        </span>
      </p>
    </header>
  );
};

export default Header;
