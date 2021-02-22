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

function addList(...nums){
    return nums.reduce((sum,num) => sum + num, 0)
}
console.log(addList(5,7,8,8));


