//You will be provided with an initial array (the first argument in the destroyer function), 
//followed by one or more arguments. Remove all elements from the initial array that are of 
//the same value as these arguments.

function destroyer(arr) {
  // Remove all the values
  var newarr = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < newarr.length; j++) {
      if (arr[i] === newarr[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3],1, 3);
//console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
