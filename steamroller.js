// Algorithm - steamroller

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArray = [];
  flatten(arr);
  
  function flatten(arr){
    arr.forEach(function(element){
      if(!Array.isArray(element)){
        newArray.push(element);
      }
      else {
        flatten(element);
      }
    });
  }
  return newArray;
  
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
