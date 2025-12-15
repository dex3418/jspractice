// nested loops question 1 print prime numbers from 1 to 200
// let start = 1;
// let end = 200;

// while (start <= end){
//     i = 2;
//     let count = 0;
//     while (i <= start){
//         if (start % i == 0){
//             count++;
//             i++;
//         }
//         i++;
//     }    if (count == 1){
//         console.log(start);
//     }
//     start++;
// }
// ---------------------------------------------------------------------------------------------------------

// nested looops question 2 between 1 and 500 print perfect numbers

// let start = 1;
// let end = 500;

// while (start <= end){
//     let sum = 0;
//     let i = 1;
//     while (i < start){
//         if (start % i == 0){
//             sum = sum + i;
//         }
//         i++;
//     }
//     if (sum == start){
//         console.log(start);
//     }
//     start++;
// }
// ---------------------------------------------------------------------------------------------------------

// nested loops question 3 armstrong numbers between 1 to 999

// let start = 1;
// let end = 9999;

// while (start <= end){
//     let sum = 0;
//     let num = start;
//     let digits = start.toString().length;
//     while (num > 0){
//         let digit = num % 10;
//         sum = sum + Math.pow(digit, digits);
//         num = Math.floor(num / 10);
//     }
//     if (sum == start){
//         console.log(start);
//     }
//     start++;
// }
// ---------------------------------------------------------------------------------------------------------

// nested loops question 4 sum of numbers between 1 to 1000 divisible by 5

// let start = 1;
// let end = 1000;
// let sum = 0;
// let count = 0;

// while (start <= end){
//     let num = start;
//     d = num % 10;
//     sum = sum + d;
//     num = Math.floor(num / 10);
//     if (sum % 5 == 0){
//         count++;

//     }
//     start++;
// }
// console.log(`Sum of numbers between 1 to 1000 divisible by 5 is ${sum} and count is ${count}`);

// ---------------------------------------------------------------------------------------------------------

// nested loops question 5 numbers are in increasing order between 1 to 999

// let start = 1;
// let end = 999;

// while (start <= end){
//     console.log(start);
//     start++;
// }
// ---------------------------------------------------------------------------------------------------------

// nested loops question 6 numbers are in repeated digits between 1 to 999

// let n = 1;
// let m = 999;

// while (n <= m){
//     let num = n;
//     let last = num % 10;
//     let count = 0;
//     while (num > 0){
//         let digit = num % 10;
//         if (digit != last){
//             count = 1;
//             break;
//         }
//         num = Math.floor(num / 10);
//     }
//     if (count == 0){
//         console.log(n);
//     }
//     n++;
// }

// ---------------------------------------------------------------------------------------------------------

// nested loops question 7 3 digit numbers with all even digits between 100 to 999

// let start = 100;
// let end = 999;

// while (start <= end){
//     let num = start;
//     let mul = 1;
//     while (num > 0){
//         let d = num % 10;
//         mul = mul * d;
//         num = Math.floor(num / 10);
//     }if (mul % 2 == 0){
//         console.log(start);
//     }
//     start++;
// }

// ---------------------------------------------------------------------------------------------------------

// nested loops question 8 numbers having exactly 3 divisors between 1 to 999

// let start = 1;
// let end = 999;

// while (start <= end){
//     let count = 0;
//     let i = 2;
//     while (i < start){
//         if (start % i == 0){
//             count++;
//         }
//         i++;
//     }
//     if (count == 3){
//         console.log(start);
//     }
//     start++;
// }
// ---------------------------------------------------------------------------------------------------------

// nested loops question 9 numbers are palindrome between 1 to 999

// let start = 1;
// let end = 999;

// while (start <= end){
//     let num = start;
//     let rev = 0;
//     while (num > 0){
//         let d = num % 10;
//         rev = rev * 10 + d;
//         num = Math.floor(num / 10);
//     }
//     if (rev == start){
//         console.log(start);
//     }
//     start++;    
// }

// ---------------------------------------------------------------------------------------------------------

// nested loops question 10 from 1 to 200 whose digits sum to a prime number

// let start = 1;
// let end = 200;

// while (start <= end){
//     let num = start;
//     let sum = 0;
//     while (num > 0){
//         let d = num % 10;
//         sum = sum + d;
//         num = Math.floor(num / 10);
//     }
//     let i = 2;
//     let count = 0;
//     while (i <= sum){
//         if (sum % i == 0){
//             count++;
//         }
//         i++;
//     }
//     if (count == 1){
//         console.log(start);
//     }
//     start++;
// }
// ---------------------------------------------------------------------------------------------------------