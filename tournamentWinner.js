const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
const results = [0, 0, 1];

const tournamentWinner = (competitions, results) => {
  let points = {}; // 1. Inicjalizacja obiektu do przechowywania punktów
  for (let i = 0; i < results.length; i++) { // 2. Pętla po meczach i wynikach
    const winner = results[i] === 0 ? competitions[i][1] : competitions[i][0]; // 3. Określenie zwycięzcy meczu
    if (!points[winner]) { // 4a. Sprawdzenie, czy drużyna jest już w obiekcie points
      points[winner] = 0; // 4b. Inicjalizacja punktów dla nowej drużyny
    }
    points[winner]++; // 4c. Zwiększenie liczby punktów dla zwycięzcy
  }
  let bestTeam = ""; // 5a. Inicjalizacja zmiennej na zwycięską drużynę
  let maxPoints = 0; // 5b. Inicjalizacja zmiennej na maksymalną liczbę punktów

  for (const team in points) { // 6. Pętla po drużynach i ich punktach
    if (points[team] > maxPoints) { // 7. Sprawdzenie, czy aktualna drużyna ma więcej punktów niż dotychczasowy lider
      maxPoints = points[team]; // 8a. Aktualizacja maksymalnej liczby punktów
      bestTeam = team; // 8b. Aktualizacja zwycięskiej drużyny
    }
  }
  return bestTeam; // 9. Zwrócenie zwycięskiej drużyny
};

const winner = tournamentWinner(competitions, results);
console.log(winner); // "Python"

const competitions2 = [
  ["B", "D"],
  ["D", "A"],
  ["A", "C"],
  ["C", "B"],
  ["B", "A"],
  ["D", "C"],
];
const results2 = [1, 1, 1, 1, 0, 0];

const winner2 = tournamentWinner(competitions2, results2);
console.log(winner2);
