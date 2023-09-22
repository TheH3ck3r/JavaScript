// Написать функцию, которая определяет, является ли строка палиндромом.
// При этом мы не учитываем пробелы и символы являются одиноковыми в
// разных регистрах.
// Ограничение по памяти О(1)

// Время O(n)
// Память O(1)

const isPolindrom = (str) => {
  let leftIndex = 0;
  let rightIndex = str.length - 1;
  while (leftIndex < rightIndex) {
    if (str[leftIndex] == " ") {
      leftIndex += 1;
    } else if (str[rightIndex] == " ") {
      rightIndex -= 1;
    }

    if (str[leftIndex].toLowerCase() != str[rightIndex].toLowerCase()) {
      return false;
    }
    leftIndex += 1;
    rightIndex -= 1;
  }
  return true;
};
