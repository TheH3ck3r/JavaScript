/* Задача

Недавно маленький Антон научился читать некоторые буквы! Точнее, он научился читать буквы R, S и M. Ему кажется, что строка из этих букв правильная, если символ R находится раньше символа M.

Напишите программу, которая определяет, является ли строка правильной по мнению Антона.

Формат входных данных:
На вход подается строка s, состоящая ровно из трех символов: R, S и M. Каждая буква встречается в строке ровно один раз.

Формат выходных данных:
Выведите YES, если символ R находится в строке раньше символа M. В противном случае выведите NO. */

// Решение
const isCorrectString = (str) =>
  str.indexOf("R") < str.indexOf("M") ? "YES" : "NO";

// Проверка
console.log(isCorrectString("RSM"));
console.log(isCorrectString("MRS"));
