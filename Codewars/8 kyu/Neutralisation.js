// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.

// Worked Example
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.

// Examples
// 1. ("--++--", "++--++") ➞ "000000"
// 2. ("-+-+-+", "-+-+-+") ➞ "-+-+-+"
// 3. ("-++-", "-+-+") ➞ "-+00"
// The two strings will be the same length.

const neutralise = (s1, s2) => {
  var answer = "";
  for (let i = 0; i < s1.length; i++) {
    answer += s1[i] != s2[i] ? "0" : s1[i];
  }
  return answer;
};
