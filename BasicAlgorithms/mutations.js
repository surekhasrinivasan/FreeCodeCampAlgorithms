//Return true if the string in the first element of the array 
//contains all of the letters of the string in 
//the second element of the array.

function mutation(arr) {
  var temp = arr[1].toLowerCase();
  //console.log(temp);
  var result = arr[0].toLowerCase();
  //console.log(result);
  for (var n = 0; n < temp.length; n++) {
    if (result.indexOf(temp[n]) < 0)
      return false;
  }
  return true;
 }

//console.log(mutation(["Alien", "line"]));
mutation((["Hello", "hey"]));