// Dodaj nowe sprawy tutaj — index.html wczyta je automatycznie
//
// Pola każdej sprawy:
//   file       - nazwa pliku .html
//   title      - tytuł wyświetlany na liście
//   pytania    - liczba pytań w quizie
//   zdjecie    - true/false — czy jest obrazek
//   dzwieki    - true/false — czy są efekty dźwiękowe (np. beep, plink, eureka...)
//   muzyka     - true/false — czy gra muzyka w tle
//   filmy      - 0 lub liczba filmów-przerw w trakcie quizu
//   filmyCo    - co ile pytań wyskakuje film-przerwa (np. 5). Zostaw 0 jeśli filmy = 0
//   filmKoniec - true/false — czy jest film na zakończenie
//   piosenkaKoniec - true/false — czy jest piosenka na zakończenie
//
// Opis efektów (np. "20 pytań · 🖼️ zdjęcie · ...") generuje się
// automatycznie w index.html na podstawie pól powyżej — nie trzeba
// pisać go ręcznie.

var SPRAWY = [
  {
    "file": "pomoz.html",
    "title": "Porucznik Columbo pyta… — Nowe zagadki",
    "pytania": 20,
    "zdjecie": true,
    "dzwieki": false,
    "muzyka": false,
    "filmy": 3,
    "filmyCo": 5,
    "filmKoniec": true,
    "piosenkaKoniec": false
  },
  {
    "file": "rower.html",
    "title": "Sprawa nr 26: Zagadka z Wypożyczalni Rowerów",
    "pytania": 10,
    "zdjecie": true,
    "dzwieki": true,
    "muzyka": false,
    "filmy": 0,
    "filmyCo": 0,
    "filmKoniec": false,
    "piosenkaKoniec": false
  },
  {
    "file": "spryt.html",
    "title": "Co zrobiłby Porucznik?",
    "pytania": 20,
    "zdjecie": true,
    "dzwieki": false,
    "muzyka": false,
    "filmy": 0,
    "filmyCo": 0,
    "filmKoniec": false,
    "piosenkaKoniec": false
  },
  {
    "file": "sherlock.html",
    "title": "Sherlock Holmes",
    "pytania": 25,
    "zdjecie": true,
    "dzwieki": true,
    "muzyka": true,
    "filmy": 4,
    "filmyCo": 5,
    "filmKoniec": false,
    "piosenkaKoniec": false
  },
  {
    "file": "historia1.html",
    "title": "Historia: XVI i XVII wiek — test 50 pytań",
    "pytania": 50,
    "zdjecie": false,
    "dzwieki": false,
    "muzyka": false,
    "filmy": 0,
    "filmyCo": 0,
    "filmKoniec": false,
    "piosenkaKoniec": false
  },
  {
    "file": "polski1.html",
    "title": "Język polski dla młodego śledczego",
    "pytania": 10,
    "zdjecie": true,
    "dzwieki": true,
    "muzyka": false,
    "filmy": 0,
    "filmyCo": 0,
    "filmKoniec": false,
    "piosenkaKoniec": false
  },
  {
    "file": "wloski1.html",
    "title": "Włoski dla młodego policjanta",
    "pytania": 10,
    "zdjecie": true,
    "dzwieki": true,
    "muzyka": false,
    "filmy": 0,
    "filmyCo": 0,
    "filmKoniec": false,
    "piosenkaKoniec": false
  },
  {
    "file": "fiz1.html",
    "title": "Fizyka na służbie",
    "pytania": 10,
    "zdjecie": true,
    "dzwieki": true,
    "muzyka": false,
    "filmy": 0,
    "filmyCo": 0,
    "filmKoniec": false,
    "piosenkaKoniec": false
  },
  {
    "file": "psychC.html",
    "title": "Psychologia słynnego porucznika",
    "pytania": 10,
    "zdjecie": true,
    "dzwieki": true,
    "muzyka": false,
    "filmy": 0,
    "filmyCo": 0,
    "filmKoniec": false,
    "piosenkaKoniec": false
  },
  {
    "file": "chemia1.html",
    "title": "Chemia na miejscu zdarzenia",
    "pytania": 10,
    "zdjecie": true,
    "dzwieki": true,
    "muzyka": false,
    "filmy": 0,
    "filmyCo": 0,
    "filmKoniec": false,
    "piosenkaKoniec": false
  }
];
