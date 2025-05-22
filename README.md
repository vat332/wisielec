# Wisielec

Gra Wisielec stworzona w React z wykorzystaniem Vite oraz TailwindCSS.

## Opis

Wisielec to klasyczna gra słowna, w której zgadujesz ukryte słowo, wybierając litery alfabetu. Masz ograniczoną liczbę prób – każda błędna litera przybliża Cię do przegranej. W tej wersji każda pomyłka "eliminuje" jeden z języków programowania.

## Funkcje

- Interfejs użytkownika oparty o React i TailwindCSS
- Dynamiczne podświetlanie liter (trafione, nietrafione)
- Efekty konfetti po wygranej
- Losowe pożegnania dla eliminowanych języków
- Responsywny design

## Uruchomienie projektu

1. Zainstaluj zależności:
   ```sh
   npm install
   ```
2. Uruchom aplikację w trybie deweloperskim:
   ```sh
   npm run dev
   ```
3. Otwórz przeglądarkę i przejdź pod adres [http://localhost:5173](http://localhost:5173)

## Budowanie aplikacji

Aby zbudować aplikację do wdrożenia produkcyjnego:

```sh
npm run build
```

## Struktura projektu

- `src/components` – komponenty React (np. [`Game`](src/components/Game.jsx), [`Keyboard`](src/components/Keyboard.jsx))
- `src/data` – dane i funkcje pomocnicze ([`words`](src/data/words.js), [`utils`](src/data/utils.js), [`constans`](src/data/constans.js))
- [`index.html`](index.html) – główny plik HTML
- [`vite.config.js`](vite.config.js) – konfiguracja Vite

## Technologie

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Confetti](https://www.npmjs.com/package/react-confetti)

## Link do aplikacji

- [Wsielec](https://wisielec-livid.vercel.app/)
