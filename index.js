// Given three arrays of integers, return the sum of elements that are common in all three arrays.

// For example:

// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays

// V1; Runtime error
const common_V1 = (a, b, c) =>
  a
    .filter((element) => newB.includes(element) && newC.includes(element))
    .reduce((result, element) => result + element, 0);

// V2; Неправильный ответ
const common_V2 = (a, b, c) => {
  return a.reduce(
    (element, result) =>
      b.includes(element) && c.includes(element)
        ? result + element
        : result + 0,
    0
  );
};

// V3;
const common = (a, b, c) => {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) > -1 && c.indexOf(a[i]) > -1) {
      sum += a[i];
      b.splice(b.indexOf(a[i]), 1);
      c.splice(c.indexOf(a[i]), 1);
    }
  }
  
  return sum;
};

console.log(common([1, 2, 2, 3], [5, 3, 2, 2], [7, 3, 2, 2]));
