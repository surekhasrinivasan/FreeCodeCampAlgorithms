
// var hashMap = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot', "'": '&apos'};

// function convertHTML(str) {
//   //&, <, >, " (double quote), and ' (apostrophe)
 
// var strArray = str.split('');
    
// strArray = strArray.map(function(char) {
        
// if (hashMap[char]){
            
// return hashMap[char];
        
// }
        
// return char;
    
// });
    
// str = strArray.join('');
    
// return str;

// }

// convertHTML("Dolce & Gabbana");
//&, <, >, " (double quote), and ' (apostrophe)

var hashMap = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'};

function convertHTML(str) {
    return str.split('').map(function(char) {return hashMap[char] ? hashMap[char] : char;}).join('');
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("<>"));
console.log(convertHTML('Stuff in "quotation marks"'));