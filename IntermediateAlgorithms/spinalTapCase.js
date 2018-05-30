// Algorithm Spinal Tap Case

// Input - 
// A string may contain multiple words. Words can be separated by an Uppercase character, spaces, and non-alphanumeric characters.

// Output - 
// Return a string in all lowercase and dashes in between words

// Example:
// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"

// 1 use regex to recognize the space or separators between words
// 	Use patterns & flags
// 2 replace each space or separator with a dash
// 3 convert string to lowercase
// 4 return string

function spinalCase(str) {
    str = str.replace(/[ _]/g,'-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    return str;   
}
console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap")); 
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));