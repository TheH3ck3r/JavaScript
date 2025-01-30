const readline = require("readline");

const sol = (n, s, numbers) => {
  let sumParts = 0;
  for (let l = 0; l < n; l++) {
    for (let r = l; r < n; r++) {
      const lPart = numbers.slice(l, r + 1);
      const res = minParts(lPart, s);
      sumParts += res;
    }
  }
  return sumParts;
};

const minParts = (segments, maxLen) => {
  let parts = 1,
    curSum = 0;

  for (const seg of segments) {
    if (curSum + seg > maxLen) {
      parts++;
      curSum = 0;
    }
    curSum += seg;
  }

  return parts;
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
  if (input.length === 2) {
    const [n, s] = input[0].split(" ").map(Number);
    const numbers = input[1].split(" ").map(Number);
    console.log(sol(n, s, numbers));
    rl.close();
  }
});
