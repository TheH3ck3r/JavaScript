// Create an addition function that does not utilize the + or - operators.

// Anti-cheat tests
// You may not use any of these symbols: +-[].'"`

// Moreover, Math, Array, eval, new Function, with and such have been disabled.

const add = (x, y) => {
  while (y !== 0) {
    const carry = x & y;
    x = x ^ y;
    y = carry << 1;
  }
  return x;
};

// Smart solution:
// function add (x, y) {
// 	return !y ? x : add(x ^ y, (x & y) << 1);
// }
