// Необходимо реализовать функцию getRanges, которая возвращает следующие результаты:
// getRanges([0, 1, 2, 3, 4, 7, 8, 10]); --> "0-4,7-8,10"
// getRanges([4, 7, 10]); --> "4,7,10"
// getRanges([2, 3, 8, 9]); --> "2-3,8-9"

// Время O(n)
// Память O(n)

const getRanges = (arr) => {
  let ans = [];
  let firstNumberInInterval = arr[0];
  let lastNumberInInterval = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === lastNumberInInterval + 1) {
      lastNumberInInterval = arr[i];
    } else {
      if (firstNumberInInterval === lastNumberInInterval) {
        ans.push(lastNumberInInterval.toString());
      } else {
        ans.push(`${firstNumberInInterval}-${lastNumberInInterval}`);
      }

      firstNumberInInterval = arr[i];
      lastNumberInInterval = arr[i];
    }
  }

  if (firstNumberInInterval === lastNumberInInterval) {
    ans.push(lastNumberInInterval.toString());
  } else {
    ans.push(`${firstNumberInInterval}-${lastNumberInInterval}`);
  }
  console.log(ans.join(","));
  return ans.join(","); // ans.toString() работает некоректно
};

getRanges([0, 1, 2, 3, 4, 7, 8, 10]);
getRanges([4, 7, 10]);
getRanges([2, 3, 8, 9]);