// Найти количество цифр в числе
// Ограничение по времени: O(1)
// Ограничение по памяти: O(1)

// Input (int): 1203149546273
// Output: 13

const digitCount = (num) => {
  return Number(Math.log10(num) + 1);
};
