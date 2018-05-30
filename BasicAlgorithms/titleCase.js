function titleCase(str) {
  //converts all the characters in a string to lowercase
  str = str.toLowerCase();
  //console.log(str);
  //split the string at space
  str = str.split(' ');
  //console.log(str);
  
  for(var i=0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase()+ str[i].slice(1);
  }
  //console.log(str.join(' '));
  return str.join(' ');
}

titleCase("I'm a little tea pot");
