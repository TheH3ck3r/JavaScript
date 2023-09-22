// Напишите функцию sum, которая умеет складывать числа.
// Пример работы:
sum(1); // console: 1
sum(1)(2)(3); // console: 1 3 6

const sum = (number) => {
  console.log(number); // Выводим первый элемент
  let result = number;
  const add = (nextNumber) => {
    result += nextNumber;
    console.log(result); // Выводим все остальные случаи
    return add;
  };
  return add; // Обрабатываем кейс, что у нас может быть множество скобок
};
