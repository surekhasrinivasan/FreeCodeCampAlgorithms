// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then 
//return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.

function addTogether() {
    var numOne = arguments[0];
    if (typeof(numOne) !== 'number') {
        return undefined;
    }
    
    if (arguments.length === 2) {
//         if (typeof(arguments[1]) === 'number') {
//             return numOne + arguments[1];
//         }
//         return undefined;
//     }
    
  return typeof(arguments[1]) === 'number' ? numOne + arguments[1] : undefined;
    }
//     return function() {
//         if (typeof(arguments[0]) !== 'number') {
//             return undefined;
//         }
//         return numOne + arguments[0];
//     };
     return function() {
        return typeof(arguments[0]) !== 'number' ? undefined : numOne + arguments[0];
    };
    
}

console.log(addTogether(2,3));
console.log(addTogether(2)(3));
console.log(addTogether(2, "3"));