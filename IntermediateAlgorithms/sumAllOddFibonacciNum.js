// Algorithm - Sum of All Odd Fibonacci Numbers 

function sumFibs(num) {
  var result = 0;
  var startNum = 0;
  var nextNum = 1;
  while (startNum <= num){
    if(startNum % 2 !== 0){
      result = result + startNum;
     }
    var sum = nextNum + startNum;
    startNum = nextNum;
    nextNum = sum;
    //console.log(sum);
  }
  return result;
}

console.log(sumFibs(4));
console.log(sumFibs(1000));
console.log(sumFibs(75024));

