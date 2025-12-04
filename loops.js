// if else question 1 print numbers from 1 to n

// let n = 20;
// let i = 1;

// while (i <= n){
//     console.log(i);
//     i++;
// }
// ------------------------------------------------------------
// if else question 2 print even numbers from 1 to n

// let n = 20;
// let i = 1;

// while (i<=n){
//     if (i % 2 == 0){
//     console.log(i);
//     i++;
//     }else {
//         i++;
//     }
// }
// ------------------------------------------------------------

// if else question 3 sum of first n natural numbers

// let n = 10;
// let i = 1;
// let sum = 0;

// while (i <= n){
//     sum = sum + i;
//     i++;
// }
// console.log("Sum is: " + sum);
// ------------------------------------------------------------

// if else question 4 multiple of any number

// let n = 2;
// let i = 1;
// let upto = 10;

// while (i <= upto){
//     console.log(`${n} x ${i} = ${n*i}`);
//     i++;
// }
// ------------------------------------------------------------
// if else question 5 count numbers between 1 to 100 and divisible by 5

// let n = 100;
// let i = 1;
// let count = 0;

// while (i <= n){
//     if (i % 5 == 0 ){
//         count++;
//         i++;
//     }
//     else {
//         i++;
//     }
// }
// console.log(`Count of numbers between 1 to ${n} and divisible by 5 is: ${count}`);

// ------------------------------------------------------------
// if else question 6 square of number 1 to 20

// let n = 20;
// let i = 1;

// while (i <= n){
//     console.log(`square of ${i} is: ${i*i}`);
//     i++;
// }

// ------------------------------------------------------------
// if else question 7 reverse the digits

// let n = 20563;
// let sum = 0;

// while (n > 0){
//     let d = n % 10;
//     sum = sum * 10 + d;
//     n = Math.floor(n / 10);
// }
// console.log(`reverse is: ${sum}`);

// ------------------------------------------------------------
// if else question 8 largest digit in a number

// let n = 75860;
// let max = 0;

// while ( n > 0 ){
//     let d = n % 10;
//     if (d > max){
//         max = d;
//         n = Math.floor(n / 10);
//     }else {
//         n = Math.floor(n / 10);
//     }
// }
// console.log(`largest digit is: ${max}`);

// ------------------------------------------------------------

// if else question 9 Armstrong number

// let n = 153;
// let temp = n;
// let sum = 0;
// let len = n.toString().length;

// while (n > 0){
//     d = n % 10;
//     sum = sum + Math.pow(d, len);
//     n = Math.floor(n / 10);
// }
// if (sum == temp){
//     console.log(`${sum} is an Armstrong number`);
// } else {
//     console.log(`${sum} is not an Armstrong number`);
// }

// ------------------------------------------------------------
// if else question 10 Fibbonacci series

// let n = 100;

// let a = 0;
// let b = 1;

// while (b <= n){
//     console.log(a);
//     console.log(b);
//     a = a + b;
//     b = a + b;
// }
// ------------------------------------------------------------