function largestOfFour(arr) {
   
   var largestNum = [0,0,0,0];
   for(var i = 0; i < arr.length; i++) {
     //console.log(i);
    for(var j = 0; j < arr[i].length; j++) {
       if(arr[i][j] > largestNum[i]) {         
          largestNum[i] = arr[i][j];
            //console.log(largestNum[i]);
        }
    }
 }
   //console.log(largestNum);
 return largestNum;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
