//DNA Pairing

//Input - String of chars. Will contain only ATCG, will only give one case. Test cases set length, not 
//required though. 

//Output - array of dna pairs. Dna pair = 2 char array, A <-> T && C <-> G, same length as input.

//Input: GCG Output: [[G, C], [C, G], [G, C]]
//1 Split input into char array
//Working with single char
//2 firstChar = inputArray[0]
//3check if firstChar is G
//          Create pair [G, C]
//Else if firstChar is C
//          Create pair [C, G]
//Else if firstChar is A
//          Create pair [A, T]
//Else if firstChar is T
//          Create pair [T, A]
//4 Add to strand variable 
//5 Repeat step 3 for additional chars
//6 Return strand
//Method 1 :
// function pairElement(str) {
//     var charArray = str.split("");
//     //console.log(charArray);
//     var dnaPairArray = [];
//     //console.log(dnaPairArray);
//     for(var i = 0; i < charArray.length; i++  ){
//     if(charArray[i] === "G"){
//         dnaPairArray.push(["G", "C"]);
//         //console.log(dnaPairArray);
//     } else if(charArray[i] === "C"){
//          dnaPairArray.push(["C", "G"]);
//          //console.log(dnaPairArray);
//     } else if(charArray[i] === "A"){
//         dnaPairArray.push(["A", "T"]);
//         //console.log(dnaPairArray);
//     } else if(charArray[i] === "T") {
//         dnaPairArray.push(["T", "A"]);
//         //console.log(dnaPairArray);
//     }
//     }
//   return dnaPairArray;
// }

// console.log(pairElement("TCG"));
// console.log(pairElement("ATCGA"));

//Method 2: using Data structure which helps in reducing number of lines of code

function pairElement(str) {
	var dnaMap = {
		C: "G",
		G: "C",
		A: "T",
		T: "A"
	};
	var charArray = str.split("");
	var dnaPairArray = [];
	for (var i = 0; i < charArray.length; i++) {
		dnaPairArray.push([charArray[i], dnaMap[charArray[i]]]);
	}
	return dnaPairArray;
}
console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
            