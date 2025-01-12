function nonConstructibleChange(coins) {
  // 1. Sortujemy tablicę monet niemalejąco. To kluczowy krok!
  coins.sort((a, b) => a - b);

  // 2. Inicjalizujemy zmienną przechowującą największą dotychczas utworzoną sumę
  let currentChangeCreated = 0;

  // 3. Iterujemy po posortowanej tablicy monet
  for (const coin of coins) {
    // 4. Sprawdzamy, czy aktualna moneta jest większa niż currentChangeCreated + 1
    if (coin > currentChangeCreated + 1) {
      // 5. Jeśli tak, to currentChangeCreated + 1 jest najmniejszą niekonstruowalną zmianą
      return currentChangeCreated + 1;
    }
    // 6. W przeciwnym razie, dodajemy wartość monety do currentChangeCreated
    currentChangeCreated += coin;
  }
  // 7. Jeśli pętla doszła do końca, to currentChangeCreated + 1 jest najmniejszą niekonstruowalną zmianą
  return currentChangeCreated + 1;
}

function nonConstructibleChangeNonMutating(coins) {
  //Kopiowanie tablicy wejsciowej zeby jej nie mutowac
  const sortedCoins = [...coins].sort((a, b) => a - b);
  let currentChangeCreated = 0;

  for (const coin of sortedCoins) {
    if (coin > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }
    currentChangeCreated += coin;
  }

  return currentChangeCreated + 1;
}

let coins1 = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(coins1)); // 11
console.log(nonConstructibleChangeNonMutating(coins1)); // 11

let coins4 = [1, 5, 1, 1, 1, 10, 15, 20];
console.log(nonConstructibleChange(coins4)); // 4
console.log(nonConstructibleChangeNonMutating(coins4)); // 4
