function palindrome(str) {
  //convert all the characters in the string to lowercase and remove unwanted characters
  var rep = /[^A-Za-z0-9]/g;
  var subStr = str.toLowerCase().replace(rep, '');
  var reverseStr = subStr.split('').reverse().join('');
  return reverseStr === subStr;
  //console.log(reverseStr);
}
palindrome("RaceCar");