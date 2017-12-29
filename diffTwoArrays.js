//Diff Two Arrays
// Input: two arrays

// Output: new array with items found in only 1 array, but not both 

// Steps:

// Add an var holder
// Check the first array against the second array
// Check each one if they have the same value add to the holder
// Repeat step 2 to the second array 
// If it can't find the holder return the result.
function diffArray(arr1, arr2) {
	var newArr = [];
	// first loop through arr1 to look for items that are not in arr2  
	for (var i = 0; i < arr1.length; i++) {
		if (arr2.indexOf(arr1[i]) === -1) {
			newArr.push(arr1[i]);
		}
	}
	// loop through arr2 to look for items that are not in arr1
	for (var j = 0; j < arr2.length; j++) {
		if (arr1.indexOf(arr2[j]) === -1) {
			newArr.push(arr2[j]);
		}
	}
	return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));