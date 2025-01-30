const readline = require("readline");

function sol(pairs) {
  const n = pairs.length;
  const used = new Array(n).fill(false);
  let maxCount = 0;

  function backtrack(start, count) {
    if (count > maxCount) {
      maxCount = count;
    }
    for (let i = start; i < n; i++) {
      if (used[i]) continue;
      for (let j = i + 1; j < n; j++) {
        if (used[j]) continue;
        for (let k = j + 1; k < n; k++) {
          if (used[k]) continue;
          if (isTriangle(pairs[i], pairs[j], pairs[k])) {
            used[i] = used[j] = used[k] = true;
            backtrack(i + 1, count + 1);
            used[i] = used[j] = used[k] = false;
          }
        }
      }
    }
  }

  backtrack(0, 0);
  return maxCount;
}

function isTriangle(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) !== (b[1] - a[1]) * (c[0] - a[0]);
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let n;
  const pairs = [];
  let currentLine = 0;

  rl.on("line", (line) => {
    if (currentLine === 0) {
      n = parseInt(line, 10);
    } else {
      const [x, y] = line.split(" ").map(Number);
      pairs.push([x, y]);
    }

    currentLine++;

    if (currentLine === n + 1) {
      rl.close();
    }
  });

  rl.on("close", () => {
    const res = sol(pairs);
    console.log(res.toString());
  });
}

main();
