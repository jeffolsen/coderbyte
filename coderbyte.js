// Challenge 1

function FirstReverse(str) {
  // code goes here
  var a = str.split("");
  str = "";

  for (var i = a.length - 1; i >= 0; i--) {
     str += a[i];
  }

  return str;
}

// Challenge 2

function FirstFactorial(num) {
  // code goes here
  var factorial = 1;
  for (var i = 1; i <= num; i++) {
    factorial *= i;
  }

  num = factorial;
  return num;
}

// Challenge 3
function LongestWord(sen) {
  // code goes here
  var nonWordCharacters = /\W/g;
  var words = sen.split(nonWordCharacters);
  var longest = "";

  for (var i = 0; i < words.length; i++) {
    longest = longest.length >= words[i].length ? longest : words[i];
  }

  sen = longest;
  return sen;
}