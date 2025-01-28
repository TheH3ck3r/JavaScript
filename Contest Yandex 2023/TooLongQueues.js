// Задача 1; Ошибка рантайма

module.exports = {
  queue: [],
  push(x) {
    if (x < 1 || !Number.isInteger(x)) {
      return;
    }
    this.queue.push(x);
  },
  shift() {
    return this.queue.shift() ?? 0;
  },
  min() {
    if (this.queue.length === 0) {
      return 0;
    }
    return Math.min.apply(null, this.queue);
  },
  max() {
    if (this.queue.length === 0) {
      return 0;
    }
    return Math.max.apply(null, this.queue);
  },
};
