// Написать счетчик, который при 1 вызове будет выводить 1, при втором вызове выводить 2 и тд.
increment(); // 1
increment(); // 2

// Вариант 1

let counter = 0;
const increment = () => {
  counter++;
  console.log(counter);
};
// Работает, но пользователь может менять counter, что не есть хорошо

// Вариант 2

const createCounter = () => {
  let counter = 0;
  return () => {
    counter++;
    console.log(counter);
  };
};

counter = createCounter();
counter(); // 1
counter(); // 2
