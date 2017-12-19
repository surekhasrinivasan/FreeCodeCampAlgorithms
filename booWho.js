// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.

// Input:
// Can be String, int, array, float, etc

// Output: bool (true / false)


// Example
// Input: true
// Output: true
// Input: 1
// Output: false

// Write the psuedocode:
// Accept the input
// Put true , false (primitive bools) in array
// Check if input in the array using includes
// If not in array, return false
// If in array, return true

function booWho(bool) {
   if (bool === true) {
         return true;
     }
     else if (bool === false) {
         return true;
     }
     else {
        return false;
    }
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho("true"));
console.log(booWho(false));
console.log(booWho("false"));
