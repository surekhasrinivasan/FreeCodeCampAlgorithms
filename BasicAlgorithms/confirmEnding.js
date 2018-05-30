function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if(str.substr(-target.length) == target){
    return true;
    } else
  return false;
}
//console.log(confirmEnding("open sesame", "same"));
confirmEnding("Bastian", "n");
