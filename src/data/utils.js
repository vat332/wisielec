export function getFarewellText(language) {
  const options = [
    `Żegnaj na zawsze, ${language}`,

    `Do zobaczenia po drugiej stronie, ${language}`,

    `Spoczywaj w spokoju, ${language}`,

    `Tęsknimy już teraz, ${language}`,

    `To już koniec, ${language}`,

    `Koniec gry, ${language}`,

    `Przegrał życie, ${language}`,

    `I po chłopie, ${language}`,

    `Zgasł jak świeczka, ${language}`,

    `Wciągnęło go w nicość, ${language}`,

    `Już go z nami nie ma, ${language}`,

    `Poległ w walce, ${language}`,

    `Zniknął bez śladu, ${language}`,

    `Odleciał w siną dal, ${language}`,

    `Padł jak długi, ${language}`,

    `Umarł śmiercią tragiczną, ${language}`,

    `Odszedł w cień, ${language}`,

    `Poleciał do lepszego świata, ${language}`,

    `No nieee, tylko nie on!, ${language}`,

    `Co za strata…, ${language}`,

    `Po nim został tylko kurz, ${language}`,

    `Poszedł w zapomnienie, ${language}`,

    `Przegrał z losem, ${language}`,

    `Życie go pokonało, ${language}`,

    `Zostały tylko wspomnienia, ${language}`,

    `Rozpłynął się jak mgła, ${language}`,

    `Czas się dla niego zatrzymał, ${language}`,

    `Wyszedł bez pożegnania, ${language}`,
  ];

  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
