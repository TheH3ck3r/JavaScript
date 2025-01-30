const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const isCorrectString = (str) =>
  str.indexOf("R") < str.indexOf("M") ? "YES" : "NO";

rl.question(" ", (input) => {
  console.log(isCorrectString(input.trim()));
  rl.close();
});
