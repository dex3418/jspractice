// pattern question 1 square pattern 5x5

// let n = 5;

// while (n > 0){
//     let row = 1;
//     let pat = "";
//     while (row <= 5){
//         pat = pat + "* ";
//         row++;
//     }
//     console.log(pat);
//     n--;
// }
// ----------------------------------------------------------------------------------------

// pattern question 2 right angled triangle
// let n = 5;

// for(let i = 1; i <= n; i++ ){
//     let pat = "";
//     for (let j = 1; j <= i; j++){
//         pat = pat + "* ";
//     }
//     console.log(pat);
// }
// ----------------------------------------------------------------------------------------

// pattern question 3 inverted right angled triangle  
// let n = 5;

// for (let i = n; i >= 1; i--){
//     let pat = "";
//     for (let j = 1; j <= i; j++){
//         pat = pat + "* ";
//     }
//     console.log(pat);
// }
// ----------------------------------------------------------------------------------------

// pattern question 4 number triangle
// let n = 5;

// for(let i = 1; i <= n; i++ ){
//     let pat = "";
//     for (let j = 1; j <= i; j++){
//         pat = pat + j + " ";
//     }
//     console.log(pat);
// }
// ----------------------------------------------------------------------------------------

// pattern question 5 same numbers per row
// let n = 5;

// for(let i = 1; i <= n; i++ ){
//     let pat = "";
//         for (let j = 1; j <= i; j++){
//         pat = pat + i;
//     }
//     console.log(pat);
// }
// --------------------------------------------------------------------------------------------------------

// pattern question 6 hollow square pattern

// let n = 5;



// ----------------------------------------------------------------------------------------

// pattern question 7 pyramid pattern

// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');

// const rl = readline.createInterface({ input, output });

// rl.question('Number: ', (n) => {
//     for (let i = 1; i <= n; i++){
//     let pat = "";
//     for (let space = 1; space <= n - i; space++){
//         pat = pat + " ";
//     }
//     for (let star = 1; star <= (2 * i - 1); star++){
//         pat = pat + "*";
//     }
//     console.log(pat);
// }

//   rl.close(); 
// });
// ----------------------------------------------------------------------------------------

// pattern question 8 inverted pyramid pattern

// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');

// const rl = readline.createInterface({ input, output });

// rl.question('Number: ', (n) => {
//     for (let i = n; i >= 1; i--){
//     let pat = "";
//     for (let space = 1; space <= n - i; space++){
//         pat = pat + " ";
//     }
//     for (let star = 1; star <= (2 * i - 1); star++){
//         pat = pat + "*";
//     }
//     console.log(pat);
// }

//   rl.close(); 
// });  

// ----------------------------------------------------------------------------------------

// patten question 9 Floyd's triangle

// let n = 4;
// let count = 1;

// for (let i = 1; i <= n; i++){
//     let pat = "";
//     for (let j = 1; j <= i; j++){
//         pat = pat + count + " ";
//         count++;
//     }
//     console.log(pat);
// }

// ----------------------------------------------------------------------------------------

// pattern question 10 0-1 triangle

// let n = 5;

// for (let i = 1; i <= n; i++){
//     let pat = "";
//     for (let j = 1; j <= i; j++){
//         if ((i + j) % 2 == 0){
//             pat = pat + "1 ";
//         } else {
//             pat = pat + "0 ";
//         }
//     }
//     console.log(pat);
// }

// ----------------------------------------------------------------------------------------

// pattern question 11 diamond pattern

// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');

// const rl = readline.createInterface({ input, output });

// rl.question('Number: ', (n) => {
//     // upper half
//     for (let i = 1; i <= n; i++){
//         let pat = "";
//         for (let space = 1; space <= n - i; space++){
//             pat = pat + " ";
//         }
//         for (let star = 1; star <= (2 * i - 1); star++){
//             pat = pat + "*";
//         }
//         console.log(pat);
//     }
//     // lower half
//     for (let i = n; i >= 1; i--){
//         let pat = "";
//         for (let space = 1; space <= n - i; space++){
//             pat = pat + " ";
//         }
//         for (let star = 1; star <= (2 * i - 1); star++){
//             pat = pat + "*";
//         }
//         console.log(pat);
//     }

//   rl.close(); 
// });

// ----------------------------------------------------------------------------------------

// pattern question 12 hollow triangle

// let n = 5;
// for (let i = 1; i <= n; i++){
//     let pat = "";
//     for (let j = 1; j <= n - i; j++){
//         pat = pat + " ";
//     }
//     for (let k = 1; k <= (2 * i - 1); k++){
//         if (k == 1 || k == (2 * i - 1) || i == n){
//             pat = pat + "*";
//         } else {
//             pat = pat + " ";
//         }
//     }
//     console.log(pat);
// }

// ----------------------------------------------------------------------------------------

// pattern question 13 print pascal's triangle

// let n = 5;

// for (let i = 0; i < n; i++){
//     let pat = "";
//     let coeff = 1;
//     for (let space = 1; space <= n - i; space++){
//         pat = pat + " ";
//     }
//     for (let j = 0; j <= i; j++){
//         pat = pat + coeff + " ";
//         coeff = coeff * (i - j) / (j + 1);
//     }
//     console.log(pat);
// }

// ----------------------------------------------------------------------------------------

// pattern question 14 butterfly pattern
// let n = 4;

// for (let i = 1; i <= n; i++){
//     let pat = "";
//     // left wing
//     for (let j = 1; j <= i; j++){
//         pat = pat + "*";
//     }
//     // spaces
//     for (let space = 1; space <= 2 * (n - i); space++){
//         pat = pat + " ";
//     }
//     // right wing
//     for (let j = 1; j <= i; j++){
//         pat = pat + "*";
//     }
//     console.log(pat);
// }

// for (let i = n; i >= 1; i--){
//     let pat = "";
//     // left wing
//     for (let j = 1; j <= i; j++){
//         pat = pat + "*";
//     }
//     // spaces
//     for (let space = 1; space <= 2 * (n - i); space++){
//         pat = pat + " ";
//     }
//     // right wing
//     for (let j = 1; j <= i; j++){
//         pat = pat + "*";
//     }
//     console.log(pat);
// }    

// ----------------------------------------------------------------------------------------

// pattern question 15 numeric palindromic pattern

// let n = 5;

// for (let i = 1; i <= n; i++){
//     let pat = "";
//     // spaces
//     for (let space = 1; space <= n - i; space++){
//         pat = pat + " ";
//     }
//     // decreasing numbers
//     for (let j = i; j >= 1; j--){
//         pat = pat + j;
//     }
//     // increasing numbers
//     for (let j = 2; j <= i; j++){
//         pat = pat + j;
//     }
//     console.log(pat);
// }

// ----------------------------------------------------------------------------------------