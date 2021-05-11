// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

var shuffle = function (nums, n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array[i] = [nums[i], nums[i + n]];
  }
  console.log(array);
  return array.flat();
};
console.log(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// Challenge: 03-sumNumbers

// Difficulty: Basic

// Prompt:

// - Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
// - If the array is empty, return 0 (zero).

// Examples:

// sumNumbers([10]) //=> 10
// sumNumbers([5, 10]) //=> 15
// sumNumbers([2, 10, -5]) //=> 7
// sumNumbers([]) //=> 0

function sumNumbers(nums) {
  return nums.reduce((sum, num) => (sum += num), 0);
}

console.log(sumNumbers([1, 9, 4, 6]));

/*-----------------------------------------------------------------------------
Challenge: 04-addList

Difficulty: Basic

Prompt:

- Write a function called addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum.
- Assume all parameters will be numbers.
- If called with no arguments, return 0 (zero).

Examples:

add(1) //=> 1
add(1,50,1.23) //=> 52.23
add(7,-12) //=> -5
-----------------------------------------------------------------------------*/
// Your solution for 04-addList here:

function addList(...nums) {
  let sum = 0;
  nums.forEach(function (num) {
    sum += num;
  });
  return sum;
}

function addList(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}
console.log(addList(5, 7, 8, 8));

// Challenge: 07-reverseUpcaseString

// Difficulty: Basic

// Prompt:

// - Write a function called reverseUpcaseString that accepts a single string argument, then returns the string with its characters in reverse order and converts all characters to uppercase.

// Examples:

// reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES"

function reverseUpcaseString(str) {
  return str.split("").reverse().join("").toUpperCase();
}
// function reverseUpcaseString(str) {
//   return str.split('').reverse().map(c => c.toUpperCase()).join('');
// }

console.log(reverseUpcaseString("SEI Rocks!"));

// - Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
// - If the length of the string argument is less than 3, return an empty string.

// Examples:

// removeEnds('SEI Rocks!'); //=> "EI Rocks"
// removeEnds('a'); //=> "" (empty string)

function removeEnds(str) {
  if (str.length < 3) return "";
  return str.substring(1, str.length - 1);
}
//substring() vs substr() LOOKUP

// function removeEnds(str) {
//   if (str.length < 3) return "";
//   return str.substr(1, str.length - 2);
// }

console.log(removeEnds("SEI Rocks!"));

// - Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
// - The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.
// - Upper and lower case characters should be counted separately.
// - Space characters should be count too.
// charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }

// function charCount(str){
//   let count = {}
//   for (i=0; i < str.length; i++){
//     let char = str.charAt(i);
//     if (count[char]) {
//       count[char]++;
//     } else {
//       count[char] = 1;
//     }
//   }
//   return count
// }
function charCount(str) {
  return str.split("").reduce(function (countObj, char) {
    countObj[char] = countObj[char] ? ++countObj[char] : 1;
    return countObj;
  }, {});
}
console.log(charCount("tomato"));

// Prompt:

// - Write a function called formatWithPadding that accepts three arguments:
//   - A numeric argument (an integer) representing the number to format.
//   - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
//   - Another numeric argument (an integer) representing the length to "pad" the returned string to.
// - The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
// - If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.

// Examples:

// formatWithPadding(123, '0', 5); //=> "00123"
// formatWithPadding(42, '*', 10); //=> "********42"
// formatWithPadding(1234, '*', 3); //=> "1234"

function formatWithPadding(int, str, num2) {
  return int.toString().padStart(num2, str);
}

// function formatWithPadding(int, char, length) {
//   let result = int.toFixed(0);
//   while (result.length < length) {
//     result = char + result;
//   }
//   return result;
// }

console.log(formatWithPadding(1142, ".", 10));

// . Write a jQuery or JS function that takes two integer parameters. Starting with the sum of your two parameters, print a countdown to the console (one second at a time) until the logs reach zero

// function countDown() {
//   let num1 = parseInt(prompt("Enter first number: "))

//   let num2 = parseInt(prompt('Enter second number: '))

//   let num = num1 + num2
//   console.log(num)
//   for (let i = num; i > 0; i--) {
//     num--;
//     console.log(num)
//   }
// }

// setInterval(countDown(), 1000)

function countDown(num1, num2) {
  let num = num1 + num2;

  for (let i = num; i > 0; i--) {
    // setTimeout(1000)
    num--;
    console.log(num);
  }
}

countDown(3, 6);

// Write a jQuery or JS function that would allow a <div> element with a click event listener to be operated using keyboard controls

/* <div onclick(keyDown,{(e => {
  if (e.which == 37){
    // LEFT
  } else if (e.which == 38){
    //UP
  } else if (e.which == 39){
    //Right
  } else if (e.which == 40){
    //Dowm
  }
})})>

</div> */

// document.getElementById("div").addEventListener("keydown", function control(e) {
//   if (e.key === "ArrowLeft") {
//     LEFT;
//   } else if (e.key === "ArrowRight") {
//     RIGHT;
//   } else if (e.key === "ArrowUp") {
//     UP;
//   } else if (e.key === 'ArrowDown'){
//     DOWN;
// }
// });

// function control(e) {
//   if (e.key === "ArrowLeft") {
//     moveLeft();
//   } else if (e.key === "ArrowRight") {
//     moveRight();
//   } else if (e.key === "ArrowUp") {
//     moveStraight();
//   }
// }

// Write a jQuery or JS function that would give empty heading elements (<h1></h1>, <h2></h2>...)a “role” attribute value of “presentation”

// let x = document.getElementsByName('h1').hasAttribute('role')
// if (x != true){
//   x.setAttribute("role", "presentation");
// }

// #1 Palindrome
// definition:- Palindrome is a word, sentence or character sequence which reads the same as we reverse it. Like- “mam”, “racecar” etc.
// PROBLEM:- Write a function that will check the string is a palindrome or not.

function isPalindrome(str) {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("turtle"));

// #2 Fibonacci
// Definition:- Fibonacci sequence is basically a sequence of number where every number in the sequence is the sum of the two previous one. A Fibonacci sequence is something look like this — 0,1,1,2,3,5,8,13,21,….
// PROBLEM:- write a function that returns the nth entry in the Fibonacci sequence, where n is a number you pass in as an argument to the function.

function Fibonacci(num) {
  let result = [0, 1];
  for (let i = 2; i <= num; i++) {
    let prevNum1 = result[i - 1];
    let prevNum2 = result[i - 2];
    result.push(prevNum1 + prevNum2);
  }
  return result[num];
}

console.log(Fibonacci(9));

function fibonacci(num) {
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(9));

function FFibonacci(n) {
  if (n <= 2) return 1;
  return FFibonacci(n - 1) + FFibonacci(n - 2);
}
console.log(FFibonacci(6) + " here");

// function F(n) {
//   if (n == 0) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   } else {
//     return F(n - 1) + F(n - 2);
//   }
// }
// console.log(F(12));

// #3 FizzBuzz
// It is the most popular challenge in a coding interview. So, before going for an interview you should check this out.
// PROBLEM:- Write a function that does the following:
// console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
// logs fizz instead of the number for multiples of 3
// logs buzz instead of the number for multiples of 5
// logs fizzbuzz for numbers that are multiples of both 3 and 5

function fizzbuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzbuzz(20);

// #4 Anagram
// Definition:- A word is an anagram of another word if they are using the same letters with the same quantity, but arranged differently.
// PROBLEM:- write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, not spaces or punctuation. For Example:
// anagram('fried','fired') // true;
// anagram('gainly', 'lying') //true;
// anagram('listen', 'bye')  // false;

const buildCharObject = (str) => {
  const charObj = {};
  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    charObj[char] = charObj + 1 || 1;
  }
  return charObj;
};

const anagram = (str1, str2) => {
  const oneCharObject = buildCharObject(str1);
  const twoCharObject = buildCharObject(str2);
  if (Object.keys(oneCharObject).length !== Object.keys(twoCharObject).length) {
    return false;
  }
  for (let char in oneCharObject) {
    if (oneCharObject[char] !== twoCharObject[char]) {
      return false;
    }
  }
  return true;
};
console.log(anagram("gainly", "lying"));
console.log(anagram("fried", "fired"));

// #5 Find the Vowels
// It’s not that kind of challenging compared to others. but that doesn’t detract from the fact that you could come across it during a job interview.
// PROBLEM:- write a function that takes a string as an argument and returns the number of vowels contained in that string.

// const findVowel = (str) => {
//   let count = 0
//   let vowel = ['a', 'e', 'i', 'o', 'u']
//   for (let char of str.toLowerCase()){
//     if (vowel.includes(char)){
//       count ++
//     }
//   }
//   return count
// }

function findVowel(str) {
  let count = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let char of str.toLowerCase()) {
    if (vowel.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(findVowel("hello"));

// #6 String Reverse
// PROBLEM:- Write a function that takes a string as an argument and return a reverse version of the given string.

function reverse(str) {
  return (str = str.toLowerCase().split("").reverse().join(""));
}

console.log(reverse("hola"));

// #7 Title Case a String
// PROBLEM:- Write a function which takes a string of two or more word and capitalize the first letter of each word.

// function upperCaseFirst(str) {
//   let valueOfFirstChar = str.charCodeAt(0);
//   // console.log(valueOfFirstChar);
//   let upperCaseLetter = String.fromCharCode(valueOfFirstChar - 32);
//   // console.log(upperCaseLetter);
//   let restOfString = str.slice(1);
//   // console.log(restOfString);
//   let finalResult = upperCaseLetter + restOfString;
//   // console.log(finalResult);
//   return finalResult;
// }

// function titleCase(inputStr) {
//   let token = inputStr.split(" ");
//   let upperCaseToken = token.map((x) => upperCaseFirst(x));
//   let result = upperCaseToken.join(" ");
//   // console.log(result);
// }

// console.log(titleCase('lets see if this works'))

// #8 Replace One Character With Another
// PROBLEM:- Replace every occurrence of a given character in a string with another.
function replaceChar(inputStr, replaceThis, withThis) {
  let retVal = [];
  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] === replaceThis) {
      retVal.push(withThis);
    } else {
      retVal.push(inputStr[i]);
    }
  }
  return retVal.join("");
}

console.log(replaceChar("hello there", "e", "P"));

// #9 Remove all duplicates from an array of integers
// PROBLEM:- write a function that will return an array without duplicate values in the array.

function removeDuplicate(arr) {
  let result = [...new Set(arr)];
  return result;
}

console.log(removeDuplicate([1, 1, 1, 2, 3, 3, 5, 6, 7]));

// #10 Find all pairs in an array of integers whose sum is equal to a given number
// PROBLEM:- Write a function that will pair up the array element whose sum is equal to a given number.

let arr = [1, 5, 6, 1, 0, 1, -3, 9];

const findSumPairs = (arr, value) => {
  let sumsLookup = {};
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    let targetVal = value - arr[i];

    if (sumsLookup[targetVal]) {
      output.push([arr[i], targetVal]);
    }

    sumsLookup[arr[i]] = true;
  }
  return output;
};

console.log(findSumPairs(arr, 6));

// Find the Most Frequent Item in an Array

arr = [2, "b", 1, "a", 2, 6, "a", 3, "b", 2, 9, 3, 2];

function mostFrequent(arr) {
  let mf = 1; //most frequent count
  let m = 0; //current count
  let item;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        m++;
      }
      if (mf < m) {
        mf = m;
      }
      item = arr[i];
    }
    m = 0;
  }
  console.log(item + " " + mf + " times");
}

mostFrequent(arr);

// Longest Substring without repeating hcars

var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let res = 0;
  let st = 0;

  for (let end = 0; end < s.length; end++) {
    if (map.has(s[end])) {
      st = Math.max(st, map.get(s[end]) + 1);
    }
    map.set(s[end], end);
    res = Math.max(res, end - st + 1);
  }
  return res;
};

console.log(lengthOfLongestSubstring("abcabcbb") + " times");

// Longest Repeating Character Replacement

var characterReplacement = function (s, k) {
  let map = new Map(),
    len = s.length,
    max = 0,
    repeatMax = 0,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < len; windowEnd += 1) {
    let rightChar = s[windowEnd];

    if (!map[rightChar]) map[rightChar] = 0;
    map[rightChar] += 1;

    repeatMax = Math.max(repeatMax, map[rightChar]);
    while (windowEnd - windowStart + 1 - repeatMax > k) {
      let leftChar = s[windowStart];
      map[leftChar] -= 1;
      windowStart++;
    }

    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
};

console.log(characterReplacement("ABAB", 2));

// Minimun Window Substring
// Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

// Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

var minWindow = function (s, t) {
  if (t.length === 0) throw Error`t can't be of length 0`;
  if (s.length < t.length) return "";
  let minSubString = null;
  let currMatchedLetters = 0;
  let targetMap = {};
  let currMap = {};
  for (let ch of t) {
    if (targetMap[ch] === undefined) {
      targetMap[ch] = 1;
      currMap[ch] = 0;
    } else targetMap[ch]++;
  }
  let targetMatchedLetters = Object.keys(targetMap).length;
  let start = 0;
  let end = -1;
  while (end < s.length) {
    if (currMatchedLetters === targetMatchedLetters) {
      //update minSubstring
      if (minSubString === null || end - start + 1 < minSubString.length) {
        minSubString = s.slice(start, end + 1);
      }
      //increament start and update
      let startChar = s[start];
      if (currMap[startChar] !== undefined) {
        currMap[startChar]--;
        if (currMap[startChar] < targetMap[startChar]) currMatchedLetters--;
      }
      start++;
    } else {
      end++;
      if (end < s.length) {
        let endChar = s[end];
        if (currMap[endChar] !== undefined) {
          currMap[endChar]++;
          if (currMap[endChar] === targetMap[endChar]) currMatchedLetters++;
        }
      }
    }
  }
  return minSubString || "";
};

console.log(minWindow("ADOBECODEBANC", "ABC"));

// ANAGRAM  AGAIN
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
  }
  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));

// LRU CACHE
strArr = ["A", "B", "C", "D", "A", "E", "D", "Z"];

function LRUCache(strArr) {
  //  initialize an index variable that would NOT be an output of the findIndex method
  // let idx = -5;
  let newCache = [];
  // Loop through and access each element of the input array
  strArr.forEach((ele) => {
    // now idx will return the current element's index.
    let idx = newCache.findIndex((l) => l === ele);
    // now, we'll use a loop to check if the element exists in our new cache array
    // if it doesn't exist, we'll add it
    // if it does exist, we'll delete it from the newCache & add it to the end
    if (idx < 0) {
      newCache.push(ele);
    } else {
      // remove duplicate element
      newCache.splice(idx, 1);
      // add element to the end of cache
      newCache.push(ele);
    }
  });
  // cut array length to 5
  let actCache = newCache.slice(0).slice(-5);
  // join arry using hyphens
  actCache = actCache.join("-");
  console.log(actCache);
  return actCache;
}

LRUCache(strArr);

function add(x) {
  return this + x;
}

const age = 25;
const myAge = add.call(age, 2);
console.log(myAge);

// Assesment to find largest in an array
const solution = (numbers) => {
  return Math.max(...numbers);
};

console.log(solution([7, 2, 6, 3]));

// A complete binary tree is a binary tree that each level except possibiliy the last level, is completed filled. Suppose you are giving a binary tree represented as an array. For example, [3, 6, 2, 9, -1, 10] retpresents the following binary tree, where -1 indicates it is a NULL node.
const solution1 = (arr) => {
  if (!arr) return "";
  if (arr.length === 0) return "";
  const sum = (arr, idx) => {
    if (idx - 1 < arr.length) {
      if (arr[idx - 1] === -1) return 0;
      return arr[idx - 1] + sum(arr, idx * 2) + sum(arr, idx * 2 + 1);
    }
    return 0;
  };
  const left = sum(arr, 2);
  const right = sum(arr, 3);
  return left == right ? "" : left > right ? "Left" : "Right";
};

// Build a function that takes as input a string of letters and returns an encoded version of the string. The encoding scheme converts letters regardless of case, that appear once in the string to the '#' character and letters that appear more than once to the '&' character. Each letter should be encoded according to this scheme. The following strings and their conversions are provided as examples.
// Input -> Output
// one ->  ###
// three -> ###&&
// Heartbreak hotel -> &&&&&#&&&##&#&&#

const strToEncode = "Heartbreak hotel";

function encode(str) {
  let letterCount = {};
  let letters = str.toLowerCase().split("");

  letters.forEach(function (letter) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  });

  return letters
    .map(function (letter) {
      return letterCount[letter] === 1 ? "#" : "&";
    })
    .join("");
}

// function encode(word) {
//   const letters = word.toLowerCase().split("");
//   const counts = letters.reduce(
//     (ct, ltr) => ((ct[ltr] = (ct[ltr] || 0) + 1), ct),
//     {}
//   );
//   return letters.map((letter) => (counts[letter] === 1 ? "#" : "&")).join("");
// }

console.log(encode(strToEncode));

const encodeString = (str) => {
  let encodedStr = "";
  const dupes = new Set();
  for (let i = 0; i < str.length; i++) {
    if ((str.match(new RegExp(str.charAt(i), "gi")) || []).length > 1) {
      dupes.add(str[i]);
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (dupes.has(str.charAt(i))) {
      encodedStr += "&";
    } else {
      encodedStr += "#";
    }
  }
  return encodedStr;
};
console.log(encodeString("Heartbreak hotel"));

function crop(message, K) {
  if (K < 1) return "";
  const regex = new RegExp(`^.{0,${K - 1}}[^ ](?= |$)`);
  return (message.match(regex) || [""])[0];
}

// .match returns an array with the matched text as the first element, or null if no match. The alternative [ "" ] will provide an empty string as a return value if there is no match (when the first word is longer than K).

// The regular expression, broken down, means:

// ^: match start of string
// .: followed by any character
// {0,10}: ... up to ten times (one less than K)
// [^ ]: followed by a character that is not a space
// (?=…): this is an assertion; it means the following expression must match, but is not included in the result:
// : followed by a space
// |: or
// $: end-of-string

const crop = (message, maxLength) => {
  const part = message.substring(0, maxLength + 1);
  return part.substring(0, part.lastIndexOf(" ")).trimEnd();
};

// function solution(U, N) {
//   return new Promise((resolve, reject) => {
//     // Resolve the promise with the result
//     const newArr = (list) => Array.from(new Set(list));

//     getLikedBrands(U.id).then((likedBrands) => likedBrands.length >= N)
//       ? resolve(likedBrands.slice(0, N).map((b) => b.name))
//       : getTopBrandsForGender(U.gender).then((topBrands) => {
//           const Brands = newArr(
//             [...likedBrands, ...topBrands].map((b) => b.name)
//           );

//           Brands.length >= N
//             ? resolve(Brands.slice(0, N))
//             : reject(new CustomError("Not enough data"));
//         });
//   });
// }

