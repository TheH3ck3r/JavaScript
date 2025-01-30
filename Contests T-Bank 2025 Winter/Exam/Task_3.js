const readline = require("readline");

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

  return minChanges.toString();
};

const solveVictoriaRunning = (n, m, distances) => {
  return minCorrections(n, m, distances);
};

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const firstLine = await new Promise((resolve) => {
    rl.question("", resolve);
  });

  const [n, m] = firstLine.split(" ").map(Number);

  const secondLine = await new Promise((resolve) => {
    rl.question("", resolve);
  });

  const distances = secondLine.split(" ").map(Number);

  console.log(solveVictoriaRunning(n, m, distances));

  rl.close();
}

main();
