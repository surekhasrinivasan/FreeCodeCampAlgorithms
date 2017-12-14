//Sum of All Numbers in a range.

// Input - An array of two numbers. The lowest number will not come first. 
// Output - Return the sum of those two numbers and all the numbers between them 

// Input - [1,4] that is [1,2,3,4] Output - sum of [1 + 2+ 3+ 4] = 10

// 1 Given an Array. Find the max number in the array
// 2 Find the min number in the array 
// 3 Starting from min number until it reaches max number, find all the numbers in between them 
// 4 Also add those consecutive numbers to get the sum of all numbers in the range.
function sumAll(arr) {
	var maxNum = Math.max(arr[0], arr[1]);
	//console.log(maxNum);
	var minNum = Math.min(arr[0], arr[1]);
	//console.log(minNum);
	var result = 0;
	for (var i = minNum; i <= maxNum; i++) {
		//console.log(i);
		result = result + i;
		//console.log(result);
	}
	return result;
}
console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));