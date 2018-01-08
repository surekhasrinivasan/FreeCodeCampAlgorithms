// Algorithm - Sorted Union 

function uniteUnique(arr) {
	var args = Array.prototype.slice.call(arguments);
	//console.log(args);
	//return arr;
	var resultArr = [];
	args.reduce(function(a, b) {
		return a.concat(b);
	}).forEach(function(item) {
		if (resultArr.indexOf(item) < 0) {
			resultArr.push(item);
		}
	});
	//console.log(resultArr);
	return resultArr;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));