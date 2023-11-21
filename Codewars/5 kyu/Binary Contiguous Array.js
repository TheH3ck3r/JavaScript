// An array consisting of 0s and 1s, also called a binary array, is given as an input.

// Task
// Find the length of the longest contiguous subarray which consists of equal number of 0s and 1s.

// Example
// s = [1,1,0,1,1,0,1,1]
//          |_____|
//             |
//         [0,1,1,0]

//         length = 4

// const binarray = (array) => {
//   const countOfArrayNumbers = array.reduce(
//     (result, element) => result + element,
//     0
//   );
//   if (array.length / 2 == countOfArrayNumbers) return array.length;

//   return countOfArrayNumbers;
// };

const binarray = (array) => {
  let sumToIndex = { 0: -1 };
  let maxLen = 0;
  let sum = 0;

  array.reduce((result, number, i) => {
    sum += number === 0 ? -1 : 1;
    sum in sumToIndex
      ? (maxLen = Math.max(maxLen, i - sumToIndex[sum]))
      : (sumToIndex[sum] = i);
    return result + number;
  }, 0);

  return maxLen;
};

// ----------------------------------------Тесты-------------------------------------

const genRandomArray = () => {
  var randomArray = [];
  for (let i = 0; i < 10; i++) {
    randomArray.push(Math.round(Math.random()));
  }
  return randomArray;
};

// Smart solution:
// const binarray = (a) => {
//   const first = { 0: -1 };
//   let [acc, max] = [0, 0];

//   a.forEach((bit, idx) => {
//     acc += 2 * bit - 1;
//     if (!(acc in first)) first[acc] = idx;
//     max = Math.max(max, idx - first[acc]);
//   });

//   return max;
// };
