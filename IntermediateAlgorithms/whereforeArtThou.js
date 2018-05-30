// Algorithm - Wherefore Art Thou

// Input - A function that takes two parameters  - the first will be an array with objects, 
// and the second will be an object. 
// Output - The function has to check the array of objects and return a new array with all the objects 
// which have the same keys and values as the second parameter

// Example - if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
// and the second argument is { last: "Capulet" }, 
// then return the third object from the array (the first argument), that is [{ first: "Tybalt", last: "Capulet" }]. 

// Use a filter method on the collection array, 
// loop through the array comparing the key-value pair with source object. 
// If the match is found return the new array object.

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
    arr = collection.filter(function(object){
       for(var i in source){
           if(source[i] != object[i]){
               return false;
           }
       }
       return true;
    });    
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));