const Header = () => {
  return (
    <header className="text-center">
      <h1
        className="text-6xl font-bold text-yellowish-50 
      md:text-8xl lg:text-9xl"
      >
        Wisielec
      </h1>
      <p className="text-3xl text-p-50 max-w-[350px] mt-4 md:text-4xl lg:text-5xl md:max-w-[500px] lg:max-w-[600px]">
        Zgadnij słowo, zanim powiesimy wisielca! Masz na to 8 prób.
        <span
          className="text-white flex justify-center mt-5 
        text-4xl md:text-6xl lg:text-7xl font-extrabold"
        >
          Powodzenia!!!🤞🏼
        </span>
      </p>
    </header>
  );
};

export default Header;
