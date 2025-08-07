// console.log("hello world!!! ")

// 1. Check Even or Odd
// const num = 8;
// if (num % 2 == 0) 
// {
//     console.log("Even");
// } else 
// {
//     console.log("Odd");
// }
        
// 2. Find the Maximum of Two Numbers
// const a = 8;
// const b = 9;
// if (a<b) 
// {
//     console.log(b,"is max");
// } else 
// {
//     console.log(a,"is max");
// }

// 3. Check Leap Year
// const year = 2020;
// if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) 
// {
//     console.log("Leap Year");
// } 
// else 
// {
//     console.log("Not a Leap Year");
// }

// 4. Sum of Natural Numbers
// const n = 5;
// const sum = (n * (n + 1)) / 2;
// console.log("Sum is:", sum);

// 5. Factorial of a Number
// const number = 4;
// const factorial = 1;
// for (let i = 1; i <= number; i++) {
//     factorial *= i;
// }
// console.log("Factorial is:", factorial); 

// 6. Print Multiplication Table
// const n = 3;
// for (let i = 1; i <= 10; i++) 
// {
//   console.log("3 x" ,i, "=" ,n * i);
// }

// 7. Reverse a Number
// with function
// const n = 123456;
// const rn = n.toString().split("").reverse().join("");
// console.log("Reversed Number:", rn);

// without function
// var n=1234
// var rem,rev = 0
// while(n!=0)
// {
//     rem = n%10
//     rev = rev*10+rem
//     n = Math.floor(n/10)
// }
// console.log(rev)

// 8. Palindrome Check (Number)
// const n = 12321;
// const rn = n.toString().split("").reverse().join("");
// if (n == rn) 
// {
//     console.log("Number is Palindrome");
// } else 
// {
//     console.log("Number is not Palindrome");
// }

// 9. Check Prime Number
// let n = 13;
// let count = 0;
// for (let i = 1; i <= n; i++) 
// {
//     if (n % i == 0) 
//     {
//         count ++;
//     }
// }
// if (count == 2) 
// {
//     console.log("It's Prime Number");
// } 
// else
// {
//     console.log("It's Not Prime Number");
// }

// 10. Count Digits in a Number
// let n = 502345;
// let c = n.toString().length;
// console.log("Number of digits:", c);

// 11. Sum of Digits
// let n = 1234;
// let digits = n.toString().split('');
// let sum = 0;
// for (let digit of digits)
// {
//   sum += parseInt(digit);
// }
// console.log("Sum of digits:", sum);

// 12. Check Armstrong Number --------------------------------------gpt
// let number = 153;
// let digits = number.toString().split('');
// let power = digits.length;

// let sum = 0;
// for (let digit of digits) {
//   sum += Math.pow(parseInt(digit), power);
// }

// if (sum === number) {
//   console.log("Armstrong");
// } else {
//   console.log("Not Armstrong");
// }

// 13. Generate Fibonacci Series
// let n = 8
// let a = 0
// let b = 1
// console.log("Fibonacci Series-> ");
// for (let i = 0; i < n; i++) 
// {
//   console.log(a);
//   let next = a + b;
//   a = b;
//   b = next;
// }

// 14. Check Vowel or Consonant
// const char = 'a';

// if ('aeiouAEIOU'.includes(char)) {
//   console.log("Vowel");
// } else {
//   console.log("Consonant");
// }

// 15. Simple Calculator
// const num1 = 4;
// const num2 = 2;
// const operator = '+';

// let result;

// if (operator === '+') {
//   result = num1 + num2;
// } else if (operator === '-') {
//   result = num1 - num2;
// } else if (operator === '*') {
//   result = num1 * num2;
// } else if (operator === '/') {
//   result = num1 / num2;
// } else {
//   console.log("Invalid operator");
// }

// console.log("Result:", result);
