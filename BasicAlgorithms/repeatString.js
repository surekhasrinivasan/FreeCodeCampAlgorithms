function diffArray(arr1, arr2) {
  var newArr = [];
  // Looping through arr1 to find elements that do not exist in arr2  
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1){
      // Pushing the unique to arr1 elements to the newArr
      newArr.push(arr1[i]);
    }
  }
  // Looping through arr2 to find elements that do not exist in arr1
  for (var j = 0; j < arr2.length; j++) {
    if (arr1.indexOf(arr2[j]) === -1){
      // Pushing the unique to arr2 elements to the newArr    
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// function repeatStringNumTimes(str, num) {
//   // repeat after me
//   var repeatString = "";
//   while (num > 0) {
//     repeatString += str;
//     num--;
//   }
//   //console.log(repeatString);
//   return repeatString;
// }

// console.log(repeatStringNumTimes("abc", 5));
