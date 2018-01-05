// Algorithm - Everything Be True 

// Input -  2 arguments, an array of objects and a string. 
// The string is supposed to be a key in the objects. 
// Output - Return true if it is truthy on all elements of a collection (first argument) otherwise
// Return false.
// Use a for loop to loop through the array of object collection which matches with the string(second argument)
// push to a array 
// then using if length of collection array equal to new array length we can return true or false 

function truthCheck(collection, pre) {
	// Is everyone being true?
	var arr = [];
	for (var i = 0; i < collection.length; i++) {
		if (collection[i][pre]) {
			arr.push("true");
		}
	}
	if (collection.length === arr.length) {
		return true;
	} else {
		return false;
	}
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
console.log(truthCheck([{"single": "yes"}], "single"));