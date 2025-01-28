const minCorrections = (n, m, distances) => {
  let firstDay = distances[0];
  let secondDay = distances[1];
  let minChanges = Infinity;

  for (let limit = firstDay; limit <= secondDay; limit++) {
    let goodDays = 0;
    let changes = 0;

    for (let i = 2; i < n; i++) {
      if (distances[i] >= firstDay && distances[i] <= secondDay) {
        goodDays++;
      } else {
        changes += Math.min(
          Math.abs(distances[i] - firstDay),
          Math.abs(distances[i] - secondDay)
        );
        goodDays++;
      }
    }

    if (goodDays >= m) {
      minChanges = Math.min(minChanges, changes);
    }
  }

  return minChanges;
};

const solveVictoriaRunning = (n, m, ...distances) => {
  return minCorrections(n, m, distances);
};

console.log(solveVictoriaRunning(3, 1, 3, 4, 6));
