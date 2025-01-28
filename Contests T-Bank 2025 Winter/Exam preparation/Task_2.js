/* Задача

Борис решил, что на протяжении следующих n дней он будет покупать своей маме букет ровно из трёх цветов. Там, где живет Борис, существует только один магазин цветов с широким ассортиментом: для каждого i в магазине есть ровно один уникальный цветок, стоящий 2^i рублей. В магазин ежедневно довозят цветы, поэтому ассортимент бесконечен.

В i-й день у Бориса есть a рублей, которые он готов потратить на букет. Борис хочет купить как можно более дорогой букет. Определите для каждого из 
n дней:
- Сколько рублей Борис потратит на букет, если он сможет купить ровно три цветка.
- Или выведите -1, если Борис не сможет купить букет.

Формат входных данных:
- Первая строка содержит число n(1 <= n <= 10^5) - кол-во дней
- Следующие n строк содержат число a(1 <= n <= 10^18) количество рублей у Бориса в этот день */

// Решение
const findMaxPrice = (moneyNow) => {
  const powers = [];
  let current = 1;

  while (current < moneyNow) {
    powers.push(current);
    current *= 2;
  }

  let sum = 0;
  let count = 0;

  for (let i = powers.length - 1; i >= 0; i--) {
    if (sum + powers[i] <= moneyNow) {
      sum += powers[i];
      count++;
    }
    if (count === 3) break;
  }

  return count === 3 ? sum : -1;
};

const solveBorisBouquets = (...args) => {
  const n = args[0];
  const moneyPerDay = args.slice(1);
  answer = [];

  for (i = 0; i < n; i++) {
    answer.push(findMaxPrice(moneyPerDay[i]));
  }

  return answer.join("\n");
};

// Проверка
console.log(solveBorisBouquets(3, 15, 67, 5));
console.log(solveBorisBouquets(2, 127, 240));
