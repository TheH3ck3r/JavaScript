// Напишите функцию findIndex, которая принимает на вход отсортированную последовательность
// и число которое нужно найти (ключ) и возвращает индекс нужного числа.

findIndex([128, 129, 130, 131, 132, 133, 134, 135], 133) == 5;
findIndex([43, 66, 98, 100], 98) == 2;
findIndex([232, 432, 2344], 3234) == -1;

// Вариант 1
// Время O(n)
// Память O(1)

const findIndex = (arr, number) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (number == arr[i]) {
      return i;
    }
  }
  return -1;
};

// Вариант 2
// Время O(n)
// Память O(1)
// Также как и вариант 1, но кода меньше

const findIndex_2 = (arr, number) => {
  return arr.findIndex((element) => {
    return element == number;
  });
};

// Вариант 3
// Время O(log(n))
// Память O(1)

const findIndex_3 = (arr, number) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex < rightIndex) {
    let mid = Math.floor((leftIndex + rightIndex) / 2);

    if (arr[mid] == number) {
      return mid;
    } else if (arr[mid] < number) {
      leftIndex = mid + 1;
    } else {
      rightIndex = mid - 1;
    }
  }

  return -1;
};
