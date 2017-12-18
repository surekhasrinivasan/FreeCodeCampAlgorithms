//Sum all Primes
//Input - Number, may not be prime, Inclusive in algorithm. Integer.
//Output - Integer, sum of the prime numbers(+) from 2 upto input 
//Example:
//Input :10 Output: 17 that is 2+3+5+7=17
//Solution:
// Is prime
// Input: number, integer positives only
// Output: boolean
//
// Loop 2 through n(non-inclusive)
//			check if input is divisible by current number
//				Not prime
//			If not
//				check the next number
//			Is prime
function isPrime(num) {
	for (var n = 2; n < num; n++) {
		if (num % n == 0) {
			return false; //number is not prime 
		}
	}
	return true;
}
// Running total starts at 0
// Find prime numbers for range 2 through 10
//		Num = 2
//		check if Num is Prime
//				Add Num to running total
//				Repeat with next number
//		If not
//				Repeat with next number 
//		Print running total
//	Print running total = 2 -> 5 -> 10 -> 17
function sumPrimes(num) {
	var total = 0;
	for (var n = 2; n <= num; n++) {
		//console.log("iteration:", n);
		if (isPrime(n)) {
			//console.log(n, "is prime");
			total = total + n;
			//continue;
		}
		//console.log("looping");
	}
	return total;
}
// console.log("2", isPrime(2));
// console.log("5", isPrime(5));
// console.log("9", isPrime(9));
console.log(sumPrimes(10));
console.log(sumPrimes(20));
console.log(sumPrimes(977));