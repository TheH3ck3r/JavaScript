// Consider the following class:

// var Animal = {
//     name: "Cat",
//     numberOfLegs: 4
// }
// Write a method that accepts a list of objects of type Animal, and returns a new list. The new list should be a copy of the original list, sorted first by the animal's number of legs, and then by its name.

// If an empty list is passed in, it should return an empty list back.

const sortAnimal = (animals) => [...animals].sort((a, b) => a.numberOfLegs - b.numberOfLegs || a.name.localeCompare(b.name));

[
  { name: "Bird", numberOfLegs: 2 },
  { name: "Dog", numberOfLegs: 4 },
  { name: "Cat", numberOfLegs: 4 },
  { name: "Spider", numberOfLegs: 8 },
  { name: "Bug", numberOfLegs: 4 },
];

// Done!