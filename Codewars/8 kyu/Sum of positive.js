// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default

const positiveSum = (arr) => {
  return arr.reduce(
    (total, element) => (element > 0 ? total + element : total + 0),
    0
  );
};
