//Finders Keepers:

// 1. create a variable to hold the arr.
// 2. use array.prototype.filter to look through the array, 
//      using the function as it's condition.
// 3. If the functions condition has been met return 
//      first occurence in the array.
// 4. Else return undefined. 

function findElement(arr, func) {
  var num;
  
  for(var i = 0; i < arr.length; i++){
    if(func(arr[i])){
       num = arr[i];
       return num;      
    }
  }  
  return num;  
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 8, 9, 10], function(num){ return num % 2 === 0; }));
console.log(findElement([1, 3, 5, 9], function(num){ return num % 2 === 0; }));