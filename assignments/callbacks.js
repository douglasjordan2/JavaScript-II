// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

function length(x) {
  return x;
}

console.log(getLength(items, length));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[getLength(items, length) - 1]);
}

function getLast(x) {
  return x;
}

console.log(last(items, getLast));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const total = x + y;
  return cb(total);
}

function sum(x) {
  return x;
}

console.log(sumNums(4, 2, sum));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  const total = x * y;
  return cb(total);
}

function multiply(x) {
  return x;
}

console.log(multiplyNums(4, 2, sum));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return list.includes(item) ? cb(true) : cb(false);
}

function containsItem(x) {
  return x;
}

console.log(contains("Pencil", items, containsItem));
console.log(contains("Bread", items, containsItem));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let newArr = [];
  for(let i = 0; i < array.length; i++) {
    if(!newArr.includes(array[i])) {
      newArr.push(array[i]);
    }
  }
  return cb(newArr);
}

console.log(removeDuplicates(items, removedArr => {
  return removedArr;
}));

