// Дан массив целых чисел nums и целочисленный целевой показатель, верните индексы
// двух чисел таким образом, чтобы они в сумме давали целевой показатель.
// Вы можете предположить, что каждый вход будет иметь ровно одно решение, и вы
// не можете использовать один и тот же элемент дважды.
// Вы можете вернуть ответ в любом порядке.

// Input: nums = [7,11,11,15], target = 22
// Output: [0,1]

// Варинт 1
// Время O(n * n)
// Память O(1)

const findNumberSumIndexes = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return 0;
};

// Варинт 2
// Время O(n)
// Память

const findNumberSumIndexes_2 = (arr, target) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(arr[i], i);
  }

  return [-1, -1];
};
