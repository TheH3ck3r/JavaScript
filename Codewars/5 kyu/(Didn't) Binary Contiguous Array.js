// An array consisting of 0s and 1s, also called a binary array, is given as an input.

// Task
// Find the length of the longest contiguous subarray which consists of equal number of 0s and 1s.

// Example
// s = [1,1,0,1,1,0,1,1]
//          |_____|
//             |
//         [0,1,1,0]

//         length = 4

const binarray = (array) => {
  const countOfArrayNumbers = array.reduce(
    (result, element) => result + element,
    0
  );
  if (array.length / 2 == countOfArrayNumbers) return array.length;

  return countOfArrayNumbers;
};

console.log(binarray([1, 0, 0, 0, 0, 0, 1, 1]));
