// Given three arrays of integers, return the sum of elements that are common in all three arrays.

// For example:

// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays

const common = (a, b, c) =>
  a.reduce(
    (result, element) =>
      b.includes(element) && c.includes(element) ? result + element : result,
    0
  );

console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]));

// Runtime error