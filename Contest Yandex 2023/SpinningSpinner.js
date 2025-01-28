// Задача 5; Решена верно

const Delay = (ms, result) => {
  return new Promise((r) => {
    return setTimeout(() => {
      r(result);
    }, ms);
  });
};

module.exports = async function (request, showSpinner, hideSpinner) {
  const timeout = {};
  const result = request();
  const race = await Promise.race([result, Delay(250, timeout)]);

  if (race == timeout) {
    showSpinner();
    await Delay(1000);
    hideSpinner();
  }
  return result;
};