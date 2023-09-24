// Сделать новый список, который будет содержать длины строк элементов из первоначального списка

const rows = [
  "function",
  "sum",
  "(a, b,",
  "...spread)",
  "{ ... 2, 3, 4, 5)); ",
  "// ",
  "[3, 4, 5] - ",
  "те самые",
  "значения которые дописали и spread оператор ",
  "добавил их в масив.",
];

const new_array = [];

const find_length = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    new_array.push(rows[i].length);
  }
  console.log(new_array);
  return new_array;
};

const find_length_2 = (arr) => {
  arr.forEach((object) => {
    new_array.push(object.length);
  });

  console.log(new_array);
  return new_array;
};

const find_length_3 = (arr) => {
  console.log(arr.map((object) => object.length));
};

find_length_3(rows);
