const readline = require("readline");

const sol = (n, k, numbers) => {
  const results = new Array(k).fill(0);
  const mod = 998244353;

  for (let p = 1; p <= k; p++) {
    const pairs = [];
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        pairs.push(numbers[i] + numbers[j]);
      }
    }

    const sums = pairs.map((num) => Math.pow(num, p) % mod);

    let totalSum = 0;
    for (const num of sums) {
      totalSum = (totalSum + num) % mod;
    }
    results[p - 1] = totalSum;
  }
  return results;
};

const main = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = [];

  rl.on("line", (line) => {
    input.push(line);
    if (input.length === 2) {
      rl.close();
    }
  });

  rl.on("close", () => {
    const [n, k] = input[0].split(" ").map(Number);
    const numbers = input[1].split(" ").map(Number);

    const res = sol(n, k, numbers);
    res.forEach((r) => console.log(r));
  });
};

main();
