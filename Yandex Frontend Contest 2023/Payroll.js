// Задача 4; Неверный ответ

const hourCoefficient = (hour) => {
  if (hour >= 8 && hour < 18) {
    return 1;
  } else if (hour >= 18 && hour < 23) {
    return 1.5;
  } else if (hour >= 23 && hour < 8) {
    return 2;
  }
};

module.exports = function (timesheet, hourRate) {
  allWorkTime = (timesheet[1][1] - timesheet[0][1]) / 3600000;
  startWorkTime = new Date(timesheet[0][1]).getUTCHours();

  let result = 0;
  for (let i = 0; i < allWorkTime; i++) {
    result += hourRate * hourCoefficient((startWorkTime + i) % 24);
  }
  return result;
};