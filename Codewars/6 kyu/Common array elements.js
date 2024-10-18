// Given three arrays of integers, return the sum of elements that are common in all three arrays.

// For example:

// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common in the 3 arrays

function common(a, b, c) {
  a = a.sort(function (a, b) {
    return a - b;
  });
  b = b.sort(function (a, b) {
    return a - b;
  });
  c = c.sort(function (a, b) {
    return a - b;
  });
  var res = 0,
    i = 0,
    j = 0,
    k = 0;
  while (i < a.length && j < b.length && k < c.length) {
    if (a[i] == b[j] && b[j] == c[k]) {
      res += a[i];
      i++;
      j++;
      k++;
    } else if (a[i] < b[j]) i++;
    else if (b[j] < c[k]) j++;
    else k++;
  }
  return res;
}

// Done!

// Smart solution:
// const common = (a, b, c) => {
//   [a, b, c] = [a, b, c].map((el) =>
//     el.reduce((sum, num) => ((sum[num] = (sum[num] || 0) + 1), sum), {})
//   );
//   return Object.keys(a).reduce(
//     (sum, key) => sum + Math.min(a[key] || 0, b[key] || 0, c[key] || 0) * key,
//     0
//   );
// };
