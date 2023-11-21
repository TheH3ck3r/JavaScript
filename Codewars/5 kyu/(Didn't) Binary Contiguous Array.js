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

// V1
const binarray = (array) => {
  console.log(
    "-----------------------------\nРандомный тест с массивом: ",
    array
  );

  if (
    array.reduce((element, result) => result + element, 0) ==
    array.length / 2
  ) {
    return array.length;
  } else {
    return "Unluck";
  }
};

// ----------------------------------------Тесты-------------------------------------

const genRandomArray = () => {
  var randomArray = [];
  for (let i = 0; i < 10; i++) {
    randomArray.push(Math.round(Math.random()));
  }
  return randomArray;
};

console.log("Normal test: " + binarray([1, 1, 0, 1, 1, 0, 1, 1]));

console.log("Random test: " + binarray(genRandomArray()));
