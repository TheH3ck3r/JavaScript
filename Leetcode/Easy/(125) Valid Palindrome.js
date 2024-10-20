// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:
// 1 <= s.length <= 2 * 10**5
// s consists only of printable ASCII characters.

// V1: 6ms | P.S: NICE!
const isPalindrome = (str) => {
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  let leftIndex = 0;
  let rightIndex = str.length - 1;
  while (leftIndex < rightIndex) {
    if (str[leftIndex].toLowerCase() != str[rightIndex].toLowerCase()) {
      return false;
    }
    leftIndex += 1;
    rightIndex -= 1;
  }
  return true;
};

// Done!
