function slasher(arr, howMany) {
  // it doesn't always pay to be first
   arr.splice(1, howMany);
  return arr;
}

//console.log(slasher([1, 2, 3,4,5,6], 2));
slasher([1,2,3,4,5,6,7], 3);
