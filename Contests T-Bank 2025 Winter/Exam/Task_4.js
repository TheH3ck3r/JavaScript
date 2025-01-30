const readline = require("readline");

function sol(n, x, y, z, numbers) {
  const dX = new Array(numbers.length);
  const dY = new Array(numbers.length);
  const dZ = new Array(numbers.length);

  for (let i = 0; i < numbers.length; i++) {
    dX[i] = x - (numbers[i] % x);
    dY[i] = y - (numbers[i] % y);
    dZ[i] = z - (numbers[i] % z);
  }

  const mdx = minIndex(dX);
  const mdy = minIndex(dY);
  const mdz = minIndex(dZ);

  const m = new Map();
  m.set(mdx, dX[mdx]);
  m.set(mdy, dY[mdy]);
  m.set(mdz, dZ[mdz]);

  let res = 0;
  for (const [key, value] of m) {
    res += value;
  }

  return res;
}

function minIndex(arr) {
  if (arr.length === 0) {
    return -1;
  }

  let minIdx = 0;
  let minVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
      minIdx = i;
    }
  }
  return minIdx;
}

function main() {
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
    const [n, x, y, z] = input[0].split(" ").map(Number);
    const numbers = input[1].split(" ").map(Number);
    const res = sol(n, x, y, z, numbers);
    console.log(res.toString());
  });
}

main();
