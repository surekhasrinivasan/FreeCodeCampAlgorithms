function reverseString(str) {
  var strArray = str.split("");
  console.log("after split");
  console.log(strArray);
  
    strArray.reverse();
  console.log("after reverse");
  console.log(strArray);
var reversedStr = strArray.join("");
  console.log("joining");
  console.log(reversedStr);

  return reversedStr;
}

console.log(reverseString("Surekha"));
