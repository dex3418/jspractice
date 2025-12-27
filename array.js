// Array Programming – Questions Only (1 to 40)
// (Array No 1)
// Write a program to print only odd numbers from the given array using a while loop.
// L = [23, 45, 32, 25, 46, 33, 71, 90]
// function printOddOnly(L){
//     let odd = [];
//     for(let i = 0; i < L.length; i++){
//         if(L[i] % 2 !== 0){
//             odd.push(L[i]);
//         }
//     }console.log(odd);
// }
// printOddOnly(L);

//---------------------------------------------------------------------------------------------------------------------

// (Array No 2)
// Write a program to create an array of natural numbers till 20 and print it.
// function naturalNum(num){
//     let natural = [];
//     for(let i = 1; i <= num; i++){
//         natural.push(i);
//     }console.log(natural);
// }
// naturalNum(20);
//---------------------------------------------------------------------------------------------------------------------

// (Array No3)
// Write a program to input 5 names from the user and print them.
// const prompt = require("prompt-sync")();
// function inputNames(n){
//     let names = [];
//     for(let i = 0; i < n; i++){
//         let name = prompt("Enter name: ");
//         names.push(name);
//     }console.log("Names are: " + names);
// }
// inputNames(5);

//---------------------------------------------------------------------------------------------------------------------

// (Array No 4)
// Given an array and its size, print the array in reverse order.
// L = [5, 4, 9, 2, 1, 0]
// function reverse(L , size){
//     let rev = [];
//     for(let i = size -1; i >= 0; i--){
//         rev.push(L[i]);
//     }console.log(rev)
// }
// reverse([5, 4, 9, 2, 1, 0] , 6)

//---------------------------------------------------------------------------------------------------------------------

// (Array No 5)
// Given an array [1, 2, 3, 4, 5, 6, 7], take a number from the user and check whether it exists in the array or not.
// const prompt = require("prompt-sync")();
// function checkNumber(L , size){
//     let check = prompt("Enter number to check: ");
//     let count = 0;
//     for(let i = 0; i < size; i++){
//         if(check == L[i]){
//             count += 1;
//         }       
//     }if(count > 0){
//         result = "Yes";
//     }else{ 
//         result = "No"; 
//     }
//     console.log(result)
//     return result;
// }
// checkNumber([1, 2, 3, 4, 5, 6, 7], 7)

//---------------------------------------------------------------------------------------------------------------------
// (Array No 6)
// Write a program to create an array of 7 numbers from the user and print "Yes" if the array consists of consecutive numbers, otherwise print "No".
// const prompt = require("prompt-sync")();
// function sumAndAverage(size, nums){
//     for(let i = 0; i < size; i++){
//         let num = prompt("Number: ")
//         nums.push(Number(num));
//     }console.log(nums);                                                          incomplete
//     for(let i = 0; i < size; i++){
//         let sum = 0;
//         sum = sum + nums[i];
//     }
// }
// sumAndAverage(5 ,[])
//---------------------------------------------------------------------------------------------------------------------

// (Array No 7)
// Make a flowchart to find the sum and average of elements in an array. Take elements as input from the user.
// const prompt = require("prompt-sync")();
// function sumAndAverage(size, nums){
//     let avg;
//     let sum = 0;
//     for(let i = 0; i < size; i++){
//         let num = prompt("Number: ")
//         nums.push(Number(num));
//     }console.log(nums);
//     for(let i = 0; i < size; i++){
//         sum = sum + nums[i];
//     }avg = sum / size;
//     console.log(avg)
// }
// sumAndAverage(5 ,[])
//---------------------------------------------------------------------------------------------------------------------

// (Array No 8)
// Write a program to count the total occurrences of a number in the array. Input the elements from the user.

//---------------------------------------------------------------------------------------------------------------------

// (Array No 9 )
// Make a flowchart to count positive and negative elements in an array. Take elements as input from the user.
// const prompt = require('prompt-sync')();
// function positiveAndNegative(size, nums){
//     let countNegative = 0;
//     let countPositive = 0;
//     for(let i = 0; i < size; i++){
//         let num = prompt("Number: ");
//         nums.push(num);
//     }
//     for(let i = 0; i < size; i++){
//         if(nums[i] > 0){
//             countPositive += 1;
//         }else{
//             countNegative += 1;
//         }
//     }console.log(`Count Positive: ${countPositive}, Count Negative: ${countNegative}`)

// }
// positiveAndNegative(5,[])

//---------------------------------------------------------------------------------------------------------------------

// (Array No 10 )
// Make a flowchart to print duplicate elements in an array. Create the array based on the size given by the user.

//---------------------------------------------------------------------------------------------------------------------

// (Array No 11)
// Create an array that stores the first n even numbers. Take n as input from the user.
// const prompt = require("prompt-sync")();
// n = prompt("Number: ");
// function evenArray(n, nums){
//     for(let i = 1; i <= n; i++){
//         let even = 2 * i;
//         nums.push(even);
        
//     }console.log(nums)
// }
// evenArray(n, [])
//---------------------------------------------------------------------------------------------------------------------

// (Array No 12)
// Create an array that stores the first n odd numbers. Take n as input from the user.
// const prompt = require("prompt-sync")();
// n = prompt("Number: ");
// function oddArray(n, nums){
//     for(let i = 0; i < n; i++){
//         let odd = 2 * i + 1;
//         nums.push(odd);
        
//     }console.log(nums)
// }
// oddArray(n, [])
//---------------------------------------------------------------------------------------------------------------------

// (Array No 13)
// Create an array that stores all the factors of a number n. Take n as input from the user.
// const prompt = require("prompt-sync")();
// n = prompt("Number: ");
// function factors(n, nums){
//     for(let i = 0; i < n; i++){
//         if(n % i == 0){
//             nums.push(i);
//         }
//     }console.log(nums);
// }
// factors(n , []);
//---------------------------------------------------------------------------------------------------------------------

// (Array No 14)
// Create an array that stores all the prime numbers up to n. Take n as input from the user.
// const prompt = require("prompt-sync")();
// n = prompt("Number: ")
// function primeNumbers(n , nums){
// let start = 1;

// while (start <= n){
//     i = 2;
//     let count = 0;
//     while (i <= start){
//         if (start % i == 0){
//             count++;
//             i++;
//         }
//         i++;
//     }    if (count == 1){
//         nums.push(start);
//     }
//     start++;
// }console.log(nums)
// }
// primeNumbers(n, []);
//---------------------------------------------------------------------------------------------------------------------

// (Array No 15)
// Create an array that stores all perfect numbers up to n. Take n as input from the user.
// const prompt = require("prompt-sync")();
// n = prompt("Number: ");
// function perfectNumbers(n, nums){
// let start = 1;

// while (start <= n){
//     let sum = 0;
//     let i = 1;
//     while (i < start){
//         if (start % i == 0){
//             sum = sum + i;
//         }
//         i++;
//     }
//     if (sum == start){
//         nums.push(start);
//     }
//     start++;
// }console.log(nums)
// }
// perfectNumbers(n, []);

//---------------------------------------------------------------------------------------------------------------------

// (Array No 16)
// Create an array that stores all Armstrong numbers up to n. Take n as input from the user.
// const prompt = require("prompt-sync")();
// n = prompt("Number: ");
// function armstrongNumbers(n, nums){
//     let start = 1;

//     while (start <= n){
//         let sum = 0;
//         let num = start;
//         let digits = start.toString().length;
//         while (num > 0){
//             let digit = num % 10;
//             sum = sum + Math.pow(digit, digits);
//             num = Math.floor(num / 10);
//         }
//         if (sum == start){
//             nums.push(start);
//         }
//         start++;
//     }console.log(nums);
// }
// armstrongNumbers(n , []);
//---------------------------------------------------------------------------------------------------------------------

// (Array No  17)
// Create an array that stores the factorial of the first n natural numbers. Take n as input from the user.

//---------------------------------------------------------------------------------------------------------------------

// (Array No  18)
// Write a program to create an array of 10 numbers from the user and count the number of odd and even numbers.
//---------------------------------------------------------------------------------------------------------------------

// (Array No  19)
// Write a program to create an array of 10 numbers from the user and find the sum of elements at even positions and odd positions separately.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 20)
// Write a program to create an array of n items where n is input from the user. Then input n names and store them in the array.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 21)
// In the flowchart of the above question, print the names entered by the user in reverse order.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 22)
// Write a program to show how to rearrange the elements in an array so that they appear in reverse order.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 23)
// Write a program to input n numbers from the user, store them in an array, and determine the maximum number.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 24)
// Write a program to store the first 100 natural numbers in an array and display them in reverse order.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 25)
// In a hospital, the weights of newborn babies are recorded monthly. Store the weights in an array and find the mean, maximum, and minimum weight. Take n as input from the user.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 26)
// In a city, daily maximum and minimum temperatures are recorded for a month. Draw a flowchart to find mean maximum temperature, mean minimum temperature, highest maximum temperature, lowest minimum temperature, hottest day, and coldest day.
//---------------------------------------------------------------------------------------------------------------------

// (Array No27)
// Convert a given Roman numeral into its decimal equivalent.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 28)
// Convert a decimal number into its Roman numeral equivalent.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 29)
// Take an array from the user as input and reverse it before printing.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 30)
// Take an array from the user as input and print the mean, median, and mode of the array.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 31)
// Take an array of size N and a number K from the user and print the array in a rotated manner with a gap of K.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 32)
// Take an array from the user as input and find duplicate elements in the array.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 33)
// Take two sorted arrays from the user and merge them into a single sorted array.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 34)
// Given an unsorted array of non-negative integers, find a contiguous subarray whose sum equals a given number S.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 35)
// Take two sorted arrays from the user and find their union and intersection.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 36)
// Take two sorted arrays of size m and n from the user and find the median of the two sorted arrays.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 37)
// Take a sorted array from the user and find a number using Binary Search.
//---------------------------------------------------------------------------------------------------------------------

// (Array No 38)
// Learn and apply the following sorting algorithms on an unsorted array:
// Selection Sort
// Insertion Sort
// Bubble Sort
//---------------------------------------------------------------------------------------------------------------------

// (Array No 39)
// Given an array [10, 12, 34, 11, 4, 5, 1]. Print the last ‘i’ elements of the array. ‘i’ is taken from the user.
// Example:
// If i = 3 → (4, 5, 1)
// If i = 5 → (34, 11, 4, 5, 1)
//---------------------------------------------------------------------------------------------------------------------