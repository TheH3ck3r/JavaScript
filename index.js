// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

// Example 1:
// Input:
// fnName = "sum"
// actions = ["call","call","getCallCount","call","getCallCount"]
// values = [[2,2],[2,2],[],[1,2],[]]
// Output: [4,4,1,3,2]
// Explanation:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// // "getCallCount" - total call count: 1
// memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// // "getCallCount" - total call count: 2

// Example 2:
// Input:
// fnName = "factorial"
// actions = ["call","call","call","getCallCount","call","getCallCount"]
// values = [[2],[3],[2],[],[3],[]]
// Output: [2,6,2,2,6,2]
// Explanation:
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoFactorial = memoize(factorial);
// memoFactorial(2); // "call" - returns 2.
// memoFactorial(3); // "call" - returns 6.
// memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// // "getCallCount" - total call count: 2
// memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// // "getCallCount" - total call count: 2

// Example 3:
// Input:
// fnName = "fib"
// actions = ["call","getCallCount"]
// values = [[5],[]]
// Output: [8,1]
// Explanation:
// fib(5) = 8 // "call"
// // "getCallCount" - total call count: 1

// function memoize(fn) {
//   let calls = 0;
//   let cash = [];
//   return function (...args) {
//     if (args) {
//       if (cash.includes(fn(...args))) {
//         cash.push(fn(...args));
//         return fn(...args);
//       }
//       calls++;
//       cash.push(fn(...args));
//       return fn(...args);
//     } else {
//       return calls;
//     }
//   };
// }

// function memoize(fn) {
//   let calls = 0;
//   return function (...args) {
//     if (args) {
//       calls++;
//       return fn(...args);
//     } else {
//       return calls;
//     }
//   };
// }

function memoize(fn) {
  let calls = 0;
  let cash = [];
  return function (...args) {
    console.log("cash: ", cash);
    answer = fn(...args);
    console.log("answer: ", answer);
    console.log(cash.includes(answer));
    console.log("calls: ", calls);
    if (args) {
      if (cash.includes(answer)) {
        console.log("Кэш");
        cash.push(answer);
        return answer;
      } else {
        calls++;
        cash.push(answer);
        return answer;
      }
    } else {
      return calls;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

const memoizedSum = memoize((fn = (a, b) => a + b));
console.log(memoizedSum(2, 2));
console.log(memoizedSum(2, 2));

// Not completed
