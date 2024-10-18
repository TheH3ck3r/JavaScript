// New
// So what about new? Well, the unary operator new is intended to create "instances" of a constructor function. To be more precise, the operation new Constructor(arg1, arg2, ...argX) does the following:

// Creates an empty object (which we'll call instance) which prototypally inherits from Constructor.prototype
// Binds Constructor to instance (meaning this is instance) and invokes Constructor with any arguments passed in
// If the return value of Constructor is an object (including arrays, functions, dates, regexes, etc.) the operation evaluates to that object
// Otherwise, the operation evaluates to instance
// Let's see some examples:

// function Person (name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype.introduce = function(){
//   return 'My name is ' + this.name + ' and I am ' + this.age;
// };
// var john = new Person('John', 30);
// var jack = new Person('Jack', 40);
// console.log( john.introduce() ); // My name is John and I am 30
// console.log( jack.introduce() ); // My name is Jack and I am 40

// function ReturnsArray (name) {
//   this.name = name;
//   return [1, 2, 3];
// }
// var arr = new ReturnsArray('arr?');
// console.log( arr.name ); // undefined
// console.log( arr ); // [1, 2, 3]
// Oof! No wonder people get confused about new. The good news is… everything new can do, you can do too.

// Exercise
// Your mission: write a function nouveau (that's French for "new") which takes one function parameter (the constructor), plus an unknown number of additional parameters of any type (arguments for the constructor). When invoked, nouveau should do everything new does and return the same object new would evaluate to, as specified above.

// var john = nouveau(Person, 'John', 30); // same result as above

// V1: Работает, но не проходит тест; `new` is not allowed.: expected 'const result = (Constructor, ...args)…' not to match /\bnew\b/
const result = (Constructor, ...args) => new Constructor(...args);
const nouveau_V1 = (Constructor, ...args) => result(Constructor, ...args);

// V2: Работает, но не проходит тест; constructor: function Fnc(){ return Fnc; }: expected Fnc{} to equal [Function fn]
const nouveau_V2 = (ConstructorName, ...args) => {
  var instance = Object.create(ConstructorName.prototype);
  var result = ConstructorName.apply(instance, args);

  return typeof result === "object" && result !== null ? result : instance;
};

// V3: Работает но, не проходит часть тестов;
// 1. constructor: function Nil(){ return Object.create(null); }: expected Nil{} to equal {}
// 2. constructor: function Top(){ return Object.prototype; }: expected Top{} to equal { …(12) }
const nouveau_V3 = (constructor, ...args) => {
  let obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  let result = constructor.apply(obj, args);
  return result instanceof Object ? result : obj;
};

// V4: Работает, но не проходит тест: function Fnc(){ return Fnc; }: expected Fnc{} to equal [Function fn]
const nouveau_V4 = (constructor, ...args) => {
  let obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  let result = constructor.apply(obj, args);
  return typeof result === "object" && result !== null ? result : obj;
};

// Not completed