// Complete the method which returns the number which is most frequent in the given input array.
// If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [7, 10, 8, 12, 7, 6, 4, 10, 7, 10]          -->  10
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

const highestRank = (array) => {
  let count = 0;
  let maxCount = -Infinity;
  let numberWithMaxCount = 0;

  array.sort((a, b) => b - a);

  for (let i = 0; i < array.length; i++) {
    if (array[i] != array[i + 1] && count > maxCount) {
      numberWithMaxCount = array[i];
      maxCount = count;
      count = 0;
    } else if (array[i] != array[i + 1] && count <= maxCount) {
      count = 0;
    } else {
      count += 1;
    }
  }

  return numberWithMaxCount;
};

// Done!

// Smart solution
// const highestRank = (arr) =>
//   arr.sort(
//     (a, b) =>
//       arr.filter((val) => val === b).length -
//         arr.filter((val) => val === a).length || b - a
//   )[0];
