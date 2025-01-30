const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
  if (input.length === parseInt(input[0], 10) + 1) {
    rl.close();
  }
});

rl.on("close", () => {
  solveBorisBouquets();
});

const solveBorisBouquets = () => {
  const n = parseInt(input[0], 10);
  const moneyPerDay = input.slice(1, n + 1).map(BigInt);
  const results = moneyPerDay.map(findMaxPrice);
  console.log(results.join("\n"));
};

const findMaxPrice = (moneyNow) => {
  const powers = [];
  let current = BigInt(1);

  while (current <= moneyNow) {
    powers.push(current);
    current *= BigInt(2);
  }

  let sum = BigInt(0);
  let count = 0;

  for (let i = powers.length - 1; i >= 0; i--) {
    if (sum + powers[i] <= moneyNow) {
      sum += powers[i];
      count++;
    }
    if (count === 3) break;
  }

  return count === 3 ? sum.toString() : "-1";
};
