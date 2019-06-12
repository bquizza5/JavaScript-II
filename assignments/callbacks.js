// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum', 'Pencil'];


/*
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/



function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length)
}

getLength(items, function(length){
  console.log(`callbacks problem 1: ${length}`)
})

//-----------------------------------------------------------------------------------

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  lastItemIndex = arr.length - 1;
  return cb(arr[lastItemIndex]);
}
last(items, function(last){
  console.log(`callbacks problem 2: ${last}`)
})

//-----------------------------------------------------------------------------------

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
sumNums(1, 2, function(total){
  console.log(`callbacks problem 3: ${total}`)
})


//-----------------------------------------------------------------------------------

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
multiplyNums(4, 5, function(total){
  console.log(`callbacks problem 4: ${total}`)
})

//-----------------------------------------------------------------------------------

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item))
}
contains('Gum', items, function(returnedValue){
  console.log(`callbacks problem 5: ${returnedValue}`)
} )

//-----------------------------------------------------------------------------------

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let unique = [...new Set(array)];

  return cb(unique)
}

removeDuplicates(items, function(result){
  console.log(`callbacks stretch: ${result}`)
})

// let unique = [...new Set(items)];

// console.log(unique)