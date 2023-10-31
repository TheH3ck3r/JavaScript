// Write a function called sumIntervals/sum_intervals that accepts an sortedArray of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an sortedArray. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

// Examples:
// sumIntervals( [
//    [1, 2],
//    [6, 10],
//    [11, 15]
// ] ) => 9

// sumIntervals( [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ] ) => 7

// sumIntervals( [
//    [1, 5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ) => 19

// sumIntervals( [
//    [0, 20],
//    [-100000000, 10],
//    [30, 40]
// ] ) => 100000030

// Tests with large intervals
// Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].

// V1
// const sumIntervals_V1 = (ArrayOfIntervals) =>
//   ArrayOfIntervals.reduce((result, interval) => {
//     console.log("interval = ", interval[1] - interval[0]);
//     return result + interval[1] - interval[0];
//   }, 0);

// V2
// const sumIntervals_V2 = (ArrayOfIntervals) => {
//   sortedArray = ArrayOfIntervals.sort((a, b) => a[0] - b[0]).map(
//     (interval, i, sortedArray) => {
//       interval[1] > sortedArray[i + 1][0] && !sortedArray[i + 1][0]
//         ? ""[interval[1], sortedArray[i + 1][0]]
//         : "";
//     }
//   );

//   return "answer = ?";
// };

// V3
// const sumIntervals_V3 = (ArrayOfIntervals) => {
//   sortedArray = ArrayOfIntervals.sort((a, b) => a[0] - b[0]).map(
//     (interval, i, sortedArray) => {
//       if (i < sortedArray.length - 1 && interval[1] > sortedArray[i + 1][0]) {
//         return `Новый интервал: ${[interval[0], sortedArray[i + 1][1]]}`;
//       } else {
//         return `Последний элемент: ${interval}`;
//       }
//     }
//   );
//   return sortedArray;
// };

// V4 (Работает, но не проходит часть тестов; Time: 866ms, Passed: 2, Failed: 3)
const sumIntervals = (ArrayOfIntervals) => {
  let mergedArray = [];
  sortedArray = ArrayOfIntervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < sortedArray.length; i++) {
    if (
      i < sortedArray.length - 1 &&
      sortedArray[i][1] > sortedArray[i + 1][0]
    ) {
      mergedArray.push([sortedArray[i][0], sortedArray[i + 1][1]]);
      i++;
    } else {
      mergedArray.push(sortedArray[i]);
    }
  }

  return mergedArray.reduce(
    (result, interval) => result + interval[1] - interval[0],
    0
  );
};

// V4-1
// const sumIntervals_V4 = (ArrayOfIntervals) => {
//   let mergedArray = [];
//   sortedArray = ArrayOfIntervals.sort((a, b) => a[0] - b[0]).map(
//     (interval, i, sortedArray) => {
//       if (i < sortedArray.length - 1 && interval[1] > sortedArray[i + 1][0]) {
//         mergedArray.push([interval[0], sortedArray[i + 1][1]]);
//         i++;
//       } else {
//         mergedArray.push(interval);
//       }
//     }
//   );
//   return mergedArray;
// };

// V5 (forEach нормально не работает)
// const sumIntervals_V5 = (ArrayOfIntervals) => {
//   let mergedArray = [];
//   sortedArray = ArrayOfIntervals.sort((a, b) => a[0] - b[0]).forEach(
//     (interval, i, sortedArray) => {
//       if (i < sortedArray.length - 1 && interval[1] > sortedArray[i + 1][0]) {
//         mergedArray.push([interval[0], sortedArray[i + 1][1]]);
//         i++;
//       } else {
//         mergedArray.push(interval);
//       }
//     }
//   );

//   return mergedArray.reduce(
//     (result, interval) => result + interval[1] - interval[0],
//     0
//   );
// };


// V6 (Пока не работает :( )
const sumIntervals_V6 = (arrayOfIntervals) => {
  arrayOfIntervals
    .sort((a, b) => a[0] - b[0])
    .filter((interval, i, arrayOfIntervals) => {
      // console.log("interval[i + 1]: ", arrayOfIntervals[i + 1][0]);
      // return interval[1] > interval[0] ? [interval[0], interval[1]] : interval;
      return interval[1] > arrayOfIntervals[i + 1][0] &&
        arrayOfIntervals[i + 1][1] != undefined
        ? [interval[0], arrayOfIntervals[i + 1][1]]
        : interval;
    });

  console.log("\nafter filter: ", arrayOfIntervals, "\n");

  return arrayOfIntervals.reduce(
    (result, interval) => result + interval[1] - interval[0],
    0
  );
};

console.log(
  "\n Test 1: ",
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ]),
  " | answer = 7\n",
  "Test 2: ",
  sumIntervals([
    [0, 20],
    [-100000000, 10],
    [30, 40],
  ]),
  " | answer = 1e8 + 30\n",
  "Random test 1: ",
  sumIntervals([
    [13, 19],
    [16, 22],
    [-19, -9],
    [12, 19],
  ]),
  " | answer = 20\n",
  "Random test 2: ",
  sumIntervals([
    [-6, -1],
    [3, 5],
    [6, 16],
    [-14, -12],
    [-2, 5],
    [19, 23],
    [2, 5],
    [16, 24],
    [10, 12],
    [7, 12],
  ]),
  " | answer = 34\n",
  "Random test 3: ",
  sumIntervals([
    [19, 22],
    [-14, -4],
    [-8, -7],
    [-19, -12],
  ]),
  " | answer = 18\n",
  "Random test 4: ",
  sumIntervals([
    [1, 4],
    [3, 6],
    [5, 8],
    [7, 10],
    [9, 12],
  ]),
  " | answer = 11\n"
);