function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
        newArr.push(arr[a]);
    else {
      newArr.push(arr[a]);
      result.push(newArr);
      newArr = [];
    }
  }

  if (newArr.length !== 0)
    result.push(newArr);
  return result;
}
chunkArrayInGroups(["a", "b", "c", "d","e","f"], 3);
