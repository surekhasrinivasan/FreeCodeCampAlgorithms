function factorialize(num){ 
 
  var result = 1;
  for(var i=1;i<=num;i++){
     //console.log("i is:" + i);
     //console.log(result);
     result = i  * result;
  }
  return result;
}
console.log(factorialize(6));