//Roman Numeral Converter
// input- any given number, no decimals

// output- answers should be uppercase, should be letters in Roman numeral form
//For example: Input - 36 Output - XXXVI 

// solution:
// 1  array or an object that stores roman numerals
// 2  identify given number
// 3  match number to its roman counterpart
// 4  for loop the number for every romans numeral match
// 5 return Roman Numeral
//For every iteration num compares to see its match with lowest decimal numbers and matches 
//with closest possible roman numbers, prints it and subtracts corresponding 
//decimal number and again loops over until it reaches to 1 
//for ex: num 36 1st iteration matches->10 prints X,
//  36 - 10 =26  2nd iteration matches->10 prints X,
//  26 - 10 =16  3rd iteration matches->10 prints X,
//  16 - 10 =6   4th iteration matches->5 prints V,
//  6 - 5 = 1    5th iteration matches->1 prints I. 
//Then it exits the loop. 
function convertToRoman(num) {
	var romanNums = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	var decimalnumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var resultRomanNums = "";
	for (var i = 0; i <= decimalnumbers.length; i++) {
		while (num >= decimalnumbers[i]) {
			resultRomanNums = resultRomanNums + romanNums[i];
			//console.log(romanNums[i]);
			//console.log(resultRomanNums);
			num = num - decimalnumbers[i];
			//console.log(decimalnumbers[i]);
		}
	}
	return resultRomanNums;
}
console.log(convertToRoman(1956));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));