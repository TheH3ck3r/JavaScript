// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

const fakeBin = (s) => {
  var answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] < 5) {
      answer += "0";
    } else answer += "1";
  }
  return answer;
};

// Done!