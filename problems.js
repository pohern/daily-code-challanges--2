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
  return str.split("").reverse().join("").toUpperCase()
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

function removeEnds(str){
  if (str.length < 3) return ''
  return str.substring(1, str.length - 1);
}
//substring() vs substr() LOOKUP

// function removeEnds(str) {
//   if (str.length < 3) return "";
//   return str.substr(1, str.length - 2);
// }

console.log(removeEnds('SEI Rocks!'))

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
  return str.split('').reduce(function(countObj, char) {
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

console.log(formatWithPadding(1142, '.', 10))

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

countDown(3,6)

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