function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatString = "";
  while (num > 0) {
    repeatString += str;
    num--;
  }
  //console.log(repeatString);
  return repeatString;
}

repeatStringNumTimes("abc", 5);
