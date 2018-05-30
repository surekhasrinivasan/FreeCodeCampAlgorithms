//Translate the provided string to pig latin.

//Input - A string is provided. Input strings are guaranteed to be English words in all lowercase.
//Output - First consonant (or consonant cluster) of the string
//moves it to the end of the word and suffixes an "ay". If the string begins with a vowel 
//"way" is added to the end.

//For Example: Input - "consonant" Output - "onsonantcay" 
// Input - "algorithm" Output - "algorithmway"

// Create an array of vowels and an empty array to hold consonants
// Check if first character of string is a vowel
//       If yes, Return string + “way”
//       If no,  loop through string to find nearest vowel
//     [LOOP] Is character vowel? 
//       If no: 
//      Add letter to consonants array.
//  Check the next letter.
//       If yes: 
//           Combine all letters in the consonants array into a string.
//  Remove all preceding characters before the vowel from the string.
//  Return the new trimmed string + consonants + “ay”
function translatePigLatin(str) {
	var vowelArray = ["a", "e", "i", "o", "u"];
	var consonantArray = [];
	if (vowelArray.indexOf(str[0]) !== -1) {
		//console.log(str + "way");
		return str + "way";
	} else {
		for (var i = 0; i < str.length; i++) {
			if (vowelArray.indexOf(str[i]) !== -1) {
				return str.substr(i) + consonantArray.join("") + "ay";
			} else consonantArray.push(str[i]);
		}
	}
}
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("psuedocode"));