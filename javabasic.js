// 1. Question: Reverse a string without using the built-in reverse() method.
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
let reverse = reverseString("Roman Khan");

console.log(reverse);

// 2. Question: Count the number of vowels in a given string.

function countVowelsReduce(str) {
  const vowels = "aeiouAEIOU";
  return str.split("").reduce(function (count, char) {
    return vowels.indexOf(char) !== -1 ? count + 1 : count;
  }, 0);
}
const vowel = countVowelsReduce("Roman Khan");
console.log(vowel);

// 3. Question: Convert the first letter of each word in a sentence to uppercase.

function uppercase(str) {
  var array1 = str.split(" ");

  var newarray1 = [];

  for (var x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }

  return newarray1.join(" ");
}

console.log(uppercase("roman khan"));

// 4. Question: Check if a string is a palindrome.
function isPalindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  if (rev == str) {
    return true;
  } else {
    return false;
  }
}

let str1 = "racecar";
let str2 = "Roman";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));

// 5. Question: Find the sum of all positive numbers in an array.
const arr = [10, 5, 1, 9];
const n = arr.length;

const sumOfArray = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sumOfArray);

// 6. Question: Find the index of the first occurrence of a specific element in an array.
arr1 = [1, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9];

target = 7;

for (let i = 0; i < arr1.length; ++i) {
  if (arr1[i] === target) {
    console.log("First index of " + target + " is: " + i);
    return;
  }
}

console.log(target + " is not present in the given array");

// 7. Question: Remove all duplicates from an array without built-in methods.

