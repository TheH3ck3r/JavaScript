// Complete the method which returns the number which is most frequent in the given input array.
// If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [7, 10, 8, 12, 7, 6, 4, 10, 7, 10]          -->  10
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

// V1: Решение с помощью хэш-мап
const highestRank_Map = (array) => {
  const myMap = new Map();

  for (number in array) {
    myMap.set(`${number}`, 1);
  }

  myMap.forEach((value, key) => {
    console.log(key, value);
  });

  return undefined;
};

// V2: Работает, но это тупое решение

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

// ------------------------------------ Tests ------------------------------------

console.log(
  "\n--------------------\n\nТест 1: " +
    highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]) +
    "\nanswer = 12"
);
console.log(
  "\n--------------------\n\nТест 2: " +
    highestRank([7, 10, 8, 12, 7, 6, 4, 10, 7, 10]) +
    "\nanswer = 10"
);
console.log(
  "\n--------------------\n\nТест 3: " +
    highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]) +
    "\nanswer = 3"
);
console.log(
  "\n--------------------\n\nТест 4: " +
    highestRank([1, 2, 3, 4, 5, 6, 7, 8, 9]) +
    "\nanswer = 9"
);
console.log(
  "\n--------------------\n\nТест 5: " +
    highestRank([
      5, 5, 5, 25, 25, 21, 21, 1, 14, 29, 26, 15, 9, 22, 2, 30, 15, 18,
    ]) +
    "\nanswer = 5"
);
console.log(
  "\n--------------------\n\nТест 6: " +
    highestRank([
      8, 8, 27, 18, 21, 29, 17, 17, 21, 27, 7, 20, 18, 23, 28, 10, 7,
    ]) +
    "\nanswer = 27"
);
console.log(
  "\n--------------------\n\nТест 7: " +
    highestRank([
      7, 30, 30, 15, 18, 11, 26, 13, 13, 13, 3, 5, 12, 7, 19, 21, 6, 20, 25,
    ]) +
    "\nanswer = 13"
);

console.log("\n--------------------");
