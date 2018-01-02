// Algorithm - Search and Replace

// Input - Three arguments - a string,  word to be replaced and replacing word
// Output - A new string with replaced word and case of the original word. 
// Note: Preserve the case of the original word when you are replacing it. 
// For example if you mean to replace the word "Book" with the word "dog", 
// it should be replaced as "Dog"

// Example: myReplace("Let us go to the store", "store", "mall") 
// should return "Let us go to the mall".

// Perform a search and replace on the sentence using the arguments 
// provided and return the new sentence.
// 1. Find if the first character of the 'before' word is uppercase, it is then change the first 
// character of the 'after' word to uppercase.
// 2. Use String replace method to replace the before word with the after word. 
// 3. Return the new string with the replace word 

function myReplace(str, before, after) {
    if(before.charAt(0) === before.charAt(0).toUpperCase()){
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));