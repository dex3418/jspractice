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
// const prompt = require("prompt-sync")();
// check = prompt("Enter number to check: ");
// function checkNumber(L , check){
//     let count = 0;
//     for(let i = 0; i < L.length; i++){
//         if(check == L[i]){
//             count += 1;
//         }       
//     }result = count > 0 ? "Yes" : "No";
//     console.log(result)
//     return result;
// }
// checkNumber([1, 2, 3, 4, 5, 6, 7], check)

//---------------------------------------------------------------------------------------------------------------------
// (Array No 6)
// Write a program to create an array of 7 numbers from the user and print "Yes" if the array consists of consecutive numbers, otherwise print "No".
// const prompt = require("prompt-sync")();
// size = prompt("Size: ");
// function sumAndAverage(size, nums){
//     let count = 0;
//     for(let i = 0; i < size; i++){
//         n = prompt("Number: ");
//         nums.push(Number(n));
//     }for(let i = 0; i < nums.length; i++){
//         if(nums[i + 1] - nums[i] == 1){
//             count += 1;
//         }
//     }result = size - 1 == count ? "Yes" : "No";
//     console.log(result);
// }
// sumAndAverage(size ,[])
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
// const prompt = require('prompt-sync')();
// size = Number(prompt('Size of array: '));
// function occurrenceOfArray(size){
//     let nums = [];
//     let dup = [];
//     for(let i = 0; i < size; i++){
//         num = Number(prompt('Numbers: '))
//         nums.push(num);
//     }for(let i = 0; i < size - 1; i++){
//         count = 1;
//         for(let j = i + 1; j < size; j++){
//             if(nums[i] === nums[j]){
//                 count += 1;
//             }
//         }if(count > 1){
//             dup.push(nums [i] + " = " + count)
//         }else{
//             dup.push(nums [i] + " = " + count)
//         }
//     }console.log(dup, nums)
// }
// occurrenceOfArray(size)

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
// const prompt = require("prompt-sync")();
// size = prompt("Size: ");
// function duplicateArray(size, nums){
//     let copy = [];
//     for(let i = 0; i < size; i++){
//         num = Number(prompt("Number: "));
//         nums.push(num);
//     }for(let i = 0; i < size; i++){
//         for(let j = i + 1; j < size; j++){
//             if(nums[i] == nums[j]){
//                 copy.push(nums[i])
//             }
//         }
//     }console.log(copy.join(" "));
// }
// duplicateArray(size, []);

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
// const prompt = require('prompt-sync')();
// n = Number(prompt('Natural Numbers Array: '));
// function factorialNatural(n){
//     let fact = [];
//     let mul = 1;
//     for(let i = 1; i <= n; i++){
//         mul = mul * i;
//         fact.push(mul);
//     }console.log(fact)
// }
// factorialNatural(n)
//---------------------------------------------------------------------------------------------------------------------

// (Array No  18)
// Write a program to create an array of 10 numbers from the user and count the number of odd and even numbers.
// const prompt = require("prompt-sync")();
// function mannualEvenAndOdd(nums, size){
//     let countEven = 0;
//     let countOdd = 0;
//     for(let i = 0; i < size; i++){
//         n = prompt("Number: ");
//         nums.push(n);
//     }for(let i = 0; i < size; i++){
//         if(nums[i] % 2 != 0){
//             countOdd += 1;
//         }else{
//             countEven += 1;
//         };
//     }console.log(`Count Even: ${countEven}, Count Odd: ${countOdd}.`)

// }
// mannualEvenAndOdd([], 10)
//---------------------------------------------------------------------------------------------------------------------

// (Array No  19)
// Write a program to create an array of 10 numbers from the user and find the sum of elements at even positions and odd positions separately.
// const prompt = require("prompt-sync")();
// function mannualSumEvenAndOdd(nums, size){
//     let countEven = 0;
//     let countOdd = 0;
//     let sumEven = 0;
//     let sumOdd = 0;
//     for(let i = 0; i < size; i++){
//         n = prompt("Number: ");
//         nums.push(Number(n));
//     }for(let i = 0; i < size; i++){
//         if( i % 2 != 0){
//             countOdd += 1;
//             sumOdd = sumOdd + nums[i];
//         }else{
//             countEven += 1;
//             sumEven = sumEven + nums[i];
//         };
//     }console.log(`Count Even: ${countEven}, Sum of Even: ${sumEven}, Count Odd: ${countOdd}, Sum of Odd: ${sumOdd}.`)

// }
// mannualSumEvenAndOdd([], 10)
//---------------------------------------------------------------------------------------------------------------------

// (Array No 20)
// Write a program to create an array of n items where n is input from the user. Then input n names and store them in the array.
// const prompt = require("prompt-sync")();
// n = prompt("Size: ")
// function inputNames(n, names){
//     for(let i = 0; i < n; i++){
//         let name = prompt("Name: ")
//         names.push(name)
//     }console.log(names);
// }
// inputNames(n, []);
//---------------------------------------------------------------------------------------------------------------------

// (Array No 21)
// In the flowchart of the above question, print the names entered by the user in reverse order.
                                                                                                    // Method 1
// const prompt = require("prompt-sync")();
// n = prompt("Size: ")
// function inputRevNames(n, names, revNames){
//     for(let i = 0; i < n; i++){
//         let name = prompt("Name: ")
//         names.push(name)
//     }
//     for(let i = n - 1; i >= 0; i--){
//         revNames.push(names[i])
//     }console.log(revNames);
// }
// inputRevNames(n, [], []);
                                                                                                    // Method 2
// const prompt = require("prompt-sync")();
// size = Number(prompt("Size: "));
// function revNames(names, size){
//     for(let i = 0; i < size; i++){
//         let name = prompt("Names: ");
//         names.push(name);
//     }console.log(names.reverse());
// }
// revNames([], size);
//---------------------------------------------------------------------------------------------------------------------

// (Array No 22)
// Write a program to show how to rearrange the elements in an array so that they appear in reverse order.
// const prompt = require("prompt-sync")();
// n = prompt("Size: ")
// function inputRevNames(n, names, revNames){
//     for(let i = 0; i < n; i++){
//         let name = prompt("Name: ")
//         names.push(name)
//     }
//     for(let i = n - 1; i >= 0; i--){
//         revNames.push(names[i])
//     }console.log(revNames);
// }
// inputRevNames(n, [], []);

//---------------------------------------------------------------------------------------------------------------------

// (Array No 23)
// Write a program to input n numbers from the user, store them in an array, and determine the maximum number.
// const prompt = require("prompt-sync")();
// size = Number(prompt("Size: "));
// function maxNumber(size, nums){
//     for(let i = 0; i < size; i++){
//         n = Number(prompt("Number: "));
//         nums.push(n);
//     }for(let i = 0; i < size - 1; i++){
//         for(let j = i + 1; j <= size; j++ ){
//             if(nums[i] > nums[j]){
//                 let temp = nums[i];
//                 nums[i] = nums[j];
//                 nums[j] = temp;
//             }
//         }
//     }let max = nums[size - 1];
//     console.log(max);
// }
// maxNumber(size, []);
//---------------------------------------------------------------------------------------------------------------------

// (Array No 24)
// Write a program to store the first 100 natural numbers in an array and display them in reverse order.
// const dell = require("prompt-sync")();
// n = Number(dell("Number: "));
// function naturalNum(n, nums){
//     for(let i = 1; i <= n; i++){
//         nums.push(i);
//     }console.log(nums.reverse())
// }
// naturalNum(n, []);
//---------------------------------------------------------------------------------------------------------------------

// (Array No 25)
// In a hospital, the weights of newborn babies are recorded monthly. Store the weights in an array and find the mean, maximum, and minimum weight. Take n as input from the user.
// const prompt = require("prompt-sync")();
// size = Number(prompt("Size: "));
// function monthlyWeight(size, nums){
//     let sum = 0;
//     for(let i = 0; i < size; i++){
//         n = Number(prompt("Weight: "));
//         nums.push(n);
//         sum = sum + n;
//     }for(let i = 0; i < size - 1; i++){
//         for(let j = i + 1; j <= size; j++ ){
//             if(nums[i] > nums[j]){
//                 let temp = nums[i];
//                 nums[i] = nums[j];
//                 nums[j] = temp;
//             }
//         }
//     }let max = nums[size - 1];
//     let min = nums[0];
//     let mean = sum / size;
    
//     console.log(`Max weight ${max}, Min weight ${min}, Mean weight ${mean}.`);
// }
// monthlyWeight(size, []);
//---------------------------------------------------------------------------------------------------------------------

// (Array No 26)
// In a city, daily maximum and minimum temperatures are recorded for a month. Draw a flowchart to find mean maximum temperature, mean minimum temperature, highest maximum temperature, lowest minimum temperature, hottest day, and coldest day.
// const prompt = require('prompt-sync')();
// size = Number(prompt('Recorded Months: '))
// function monthlyTemperature(temperature, size){
//     let sumMin = 0;
//     let sumMax = 0;
//     let meanMax;
//     let meanMin;
//     for(let i = 0; i < size; i++){
//         minTemp = Number(prompt('Minimum Temperature: '));
//         sumMin = sumMin + minTemp;
//         maxTemp = Number(prompt('Maximum Temperature: '));
//         sumMax = sumMax + maxTemp;
//         temperature.push(minTemp, maxTemp)
//     }meanMax = sumMax / size;
//     meanMin = sumMin / size;
//     console.log(`Mean maximum: ${meanMax}, Mean Minimum: ${meanMin}, Temperature: ${temperature}`)
    
// }
// monthlyTemperature([], size);
//---------------------------------------------------------------------------------------------------------------------

// (Array No27)
// Convert a given Roman numeral into its decimal equivalent.
// const romanValues = {
//   'M': 1000, 'CM': 900, 'D': 500, 'CD': 400,
//   'C': 100, 'XC': 90, 'L': 50, 'XL': 40,
//   'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1
// };
// const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
// const prompt = require('prompt-sync')();
// roman = Number(prompt('Number: '))
// function romanNumber(roman){
//     let romanVal = '';
//     for(let i = 0; i < values.length; i++){
//         for(roman; roman >= values[i]; roman -= values[i]){
//             romanVal = romanVal + symbols[i]
//         }
//     }console.log(romanVal);
// }
// romanNumber(roman)
//---------------------------------------------------------------------------------------------------------------------

// (Array No 28)
// Convert a decimal number to  its Roman numeral equivalent.
// const romanMap = { 1000: "M", 900: "CM", 500: "D",
//     400: "CD", 100: "C", 90: "XC", 50: "L", 40: "XL",
//     10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I" 
// };
// const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
// const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
// const prompt = require('prompt-sync')();
// romanNum = prompt('Enter Roman Number: ');
// function romanToNumber(romanNum){
//     let val = 0
//     rom = romanNum.length
//     for(let i = 0; i < rom; i++){
//         console.log(i)
//         for(let j = 0; j < symbols.length; j++){
//             console.log(j, symbols[j])
//             if(romanNum[i] == symbols[j]){
//                 val = val + values[j]
//                 console.log(j, symbols[j])
//             }
//         }
//     }console.log(val)
// }
// romanToNumber(romanNum)
//---------------------------------------------------------------------------------------------------------------------

// (Array No 29)
// Take an array from the user as input and reverse it before printing.
// const prompt = require("prompt-sync")();
// n = prompt("Size: ")
// function inputRevNames(n, names, revNames){
//     for(let i = 0; i < n; i++){
//         let name = prompt("Name: ")
//         names.push(name)
//     }
//     for(let i = n - 1; i >= 0; i--){
//         revNames.push(names[i])
//     }console.log(revNames);
// }
// inputRevNames(n, [], []);

//---------------------------------------------------------------------------------------------------------------------

// (Array No 30)
// Take an array from the user as input and print the mean, median, and mode of the array.
// const prompt = require('prompt-sync')();
// size = Number(prompt('Size of array: '))
// function meanMedianMode(size){
//     let median;
//     let nums = []
//     let sum = 0;
//     for(let i = 0; i < size; i++){
//         num = Number(prompt('Numbers: '))
//         sum = sum + num
//         nums.push(num)
//     }if(size % 2 == 0){
//         median = size / 2;
//         totMedian = (nums[median - 1] + nums[median]) / 2
//     }else{
//         median = (size + 1) / 2;
//         totMedian = nums[median - 1] 
//     }
//     let mean = sum / size;
//     console.log(`mean: ${mean}, median: ${totMedian}, mode: `)
// }
// meanMedianMode(size)

//---------------------------------------------------------------------------------------------------------------------

// (Array No 31)
// Take an array of size N and a number K from the user and print the array in a rotated manner with a gap of K.
// const prompt = require('prompt-sync')();
// size = Number(prompt('Size of array: '))
// k = Number(prompt('Rotate by: '))
// function rotateArray(size, k){
//     let nums = []
//     let rotatedArray = []
//     for(let i = 0; i < size; i++){
//         num = Number(prompt('Numbers: '))
//         nums.push(num);
//     }for(let i = k; i < size; i++){
//         rotatedArray.push(nums[i]);
//     }for(let i = 0; i < k; i++){
//         rotatedArray.push(nums[i]);
//     }console.log(rotatedArray)
// }
// rotateArray(size, k)
//---------------------------------------------------------------------------------------------------------------------

// (Array No 32)
// Take an array from the user as input and find duplicate elements in the array.
// const prompt = require('prompt-sync')();
// size = Number(prompt('Size of array: '))
// function findDuplicate(size){
//     let nums = []
//     let dup = []
//     for(let i = 0; i < size; i++){
//         num = Number(prompt('Numbers: '))
//         nums.push(num);
//     }for(let i = 0; i < size - 1; i++){
//         for(let j = i + 1; j < size; j++){
//             if(nums[i] === nums[j]){
//                 dup.push(nums [i])
//             }
//         }
//     }console.log(dup, nums)
// }
// findDuplicate(size)
//---------------------------------------------------------------------------------------------------------------------

// (Array No 33)
// Take two sorted arrays from the user and merge them into a single sorted array.
// let a = [2, 4, 6, 8];
// let b = [1, 3, 5, 9];
// function sortAndMerge(a, b){
//     let ab = a.concat(b);
//     for(let i = 0; i < ab.length - 1; i++){
//         for(let j = i + 1; j < ab.length; j++){
//             if(ab[i] > ab[j]){
//                 let temp = ab[i];
//                 ab[i] = ab[j];
//                 ab[j] = temp;
//             }
//         }
//     }
//     console.log(ab)
// }
// sortAndMerge(a, b)

//---------------------------------------------------------------------------------------------------------------------

// (Array No 34)
// Given an unsorted array of non-negative integers, find a contiguous subarray whose sum equals a given number S.
// let arr = [1, 2, 3, 7, 5];
// let S = 12;
// function subArraySum(arr, S){
//     let currSum = arr[0];
//     let start = 0;
//     for(let i = 1; i <= arr.length; i++){
//         while(currSum > S && start < i - 1){
//             currSum = currSum - arr[start];
//             start += 1;
//         }if(currSum == S){
//             console.log(`Sum found between indexes ${start} and ${i - 1}`);
//             return;
//         }if(i < arr.length){
//             currSum = currSum + arr[i];
//         }
//     }console.log("No subarray found");
// }
// subArraySum(arr, S);
//---------------------------------------------------------------------------------------------------------------------

// (Array No 35)
// Take two sorted arrays from the user and find their union and intersection.
// let a = [1,2,3,4,5,6];
// let b = [2,4,6,7,8,9];
// function unionAndIntersection(union, intersection){
//     for(let i = 0; i < a.length - 1; i++){
//         for(let j = 0; j < b.length - 1; j++){
//             if(a[i] == b[j]){
//                 union.push(a[i]);
//             }
//         }
//     }
// }
// unionAndIntersection([],[])
//---------------------------------------------------------------------------------------------------------------------

// (Array No 36)
// Take two sorted arrays of size m and n from the user and find the median of the two sorted arrays.
// const prompt = require('prompt-sync')();
// m = Number(prompt('Size of first array: '));
// n = Number(prompt('Size of second array: '));
// function medianOfTwoSortedArrays(m, n){
//     let arr1 = []
//     let arr2 = []
//     let mergedArray = []
//     let median;
//     for(let i = 0; i < m; i++){
//         num1 = Number(prompt('First Array Number: '))
//         arr1.push(num1);
//     }for(let j = 0; j < n; j++){
//         num2 = Number(prompt('Second Array Number: '))
//         arr2.push(num2);
//     }mergedArray = arr1.concat(arr2);
//     for(let i = 0; i < mergedArray.length - 1; i++){
//         for(let j = i + 1; j < mergedArray.length; j++){
//             if(mergedArray[i] > mergedArray[j]){
//                 let temp = mergedArray[i];
//                 mergedArray[i] = mergedArray[j];
//                 mergedArray[j] = temp;
//             }
//         }
//     }if(mergedArray.length % 2 == 0){
//         let mid = mergedArray.length / 2;
//         median = (mergedArray[mid - 1] + mergedArray[mid]) / 2;
//     }else{
//         let mid = (mergedArray.length + 1) / 2;
//         median = mergedArray[mid - 1];
//     }console.log(`Merged Array: ${mergedArray}, Median: ${median}`)
// }
// medianOfTwoSortedArrays(m, n);

//---------------------------------------------------------------------------------------------------------------------

// (Array No 37)
// Take a sorted array from the user and find a number using Binary Search.
// const prompt = require('prompt-sync')()
// size = Number(prompt('Size of an Array: '));
// function binarySearch(size){
//     let nums = []
//     let result;
//     for(let i = 0; i < size; i++){
//         num = Number(prompt('Number: '))
//         nums.push(num);
//     }
//     let target = Number(prompt('Target Number: '));
//     let left = 0;
//     let right = size - 1;
//     while(left <= right){
//         let mid = Math.floor((left + right) / 2);
//         if(nums[mid] === target){
//             result = `Element found at index ${mid}`;
//             break;
//         }else if(nums[mid] < target){
//             left = mid + 1;
//         }else{
//             right = mid - 1;
//         }
//     }if(left > right){
//         result = 'Element not found in the array';
//     }console.log(result);
// }
// binarySearch(size);
//---------------------------------------------------------------------------------------------------------------------

// (Array No 38)
// Learn and apply the following sorting algorithms on an unsorted array:
// Selection Sort

// let arr = [64, 25, 12, 22, 11];
// function selectionSort(arr) {
//     let n = arr.length;
        
//     for(let i = 0; i < n - 1; i++) {
//         let min_idx = i;
//         for(let j = i + 1; j < n; j++) {
//             if(arr[j] < arr[min_idx]) {
//                 min_idx = j;
//             }
//         }
//         let temp = arr[min_idx];
//         arr[min_idx] = arr[i];
//         arr[i] = temp;
//     }
//     console.log("Sorted array: " + arr);
// }
// selectionSort(arr);
// ---------------------------------------------------------------------------------------------------------------------
// Insertion Sort
// let arr1 = [12, 11, 13, 5, 6];
// function insertionSort(arr1) {
//     let n = arr1.length;
//     for (let i = 1; i < n; i++) {
//         let key = arr1[i];
//         let j = i - 1;

//         while (j >= 0 && arr1[j] > key) {
//             arr1[j + 1] = arr1[j];
//             j = j - 1;
//         }
//         arr1[j + 1] = key;
//     }
//     console.log("Sorted array: " + arr1);
// }
// insertionSort(arr1);
//--------------------------------------------------------------------------------------------------------------------- 
// Bubble Sort
// let arr2 = [5, 1, 4, 2, 8];
// function bubbleSort(arr2) {
//     let n = arr2.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr2[j] > arr2[j + 1]) {
//                 let temp = arr2[j];
//                 arr2[j] = arr2[j + 1];
//                 arr2[j + 1] = temp;
//             }
//         }
//     }
//     console.log("Sorted array: " + arr2);
// }
// bubbleSort(arr2);  
//---------------------------------------------------------------------------------------------------------------------

// (Array No 39)
// Given an array [10, 12, 34, 11, 4, 5, 1]. Print the last ‘i’ elements of the array. ‘i’ is taken from the user.
// Example:
// If i = 3 → (4, 5, 1)
// If i = 5 → (34, 11, 4, 5, 1)
// const prompt = require('prompt-sync')();
// i = Number(prompt("Number: "));
// function lastIElements(i){
//     let arr = [10, 12, 34, 11, 4, 5, 1];
//     let result = [];
//     for(let j = arr.length - i; j < arr.length; j++){
//         result.push(arr[j]);
//     }console.log(result);
// }
// lastIElements(i)
//---------------------------------------------------------------------------------------------------------------------
// const prompt = require('prompt-sync')();
// num = Number(prompt("Number: "));
// function evenOrOdd(num){
//     let check = Math.floor(num / 2) * 2
//     let checkEven = (check == num) ? 'Even': 'Odd'                  // Extra questions
//     console.log(checkEven)
// }
// evenOrOdd(num)
//--------------------------------------------------------------------------------------------------------------------
// Removing duplicate numbers in an array
// const prompt = require('prompt-sync')();
// size = Number(prompt("Size: "));                                        // Extra question
// function remDupArray(nums, size){
//     let temp;
//     let numb = ''
//     for(let i = 0; i < size; i++){
//         n = Number(prompt('Number: '));
//         nums.push(n);
//     }for(let i = 0; i < size - 1; i++){
//         for(let j = i + 1; j < size; j++){                             // Method 1
//             if(nums[i] == nums[j]){
//                 nums[i] = null;
//             }
//         }
//     }for(let i = 0; i < size -1; i++){
//         for(let j = i + 1; j < size; j++){
//             if(nums[i] > nums[j]){
//                 temp = nums[i];
//                 nums[i] = nums[j];
//                 nums[j] = temp;
//             }
//         }
//     }for(let i = 0; i < size; i++){
//         if(nums[i] > null){
//             numb = numb + nums[i] + " "
//         }
//     } console.log(numb);
// } 
// remDupArray([], size)