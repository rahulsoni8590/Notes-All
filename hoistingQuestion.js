/*Variable Hoisting:

Questions 1 and 4 deal with how var, let, and const behave with hoisting.
Function Scope vs. Block Scope:

Question 2 explores how var, let, and const behave differently in function and block scopes.
Global vs. Local Scope:

Question 3 examines the scope of variables declared globally versus locally within a function.
Function Declarations vs. Function Expressions:

Question 4 illustrates how function declarations and function expressions are hoisted and executed.
Closures:

Question 5 provides insight into how closures retain access to variables from their outer scope.
Variable Shadowing:

Question 6 demonstrates how inner scopes can shadow variables from outer scopes.
let and const in Loops:

Question 7 compares the behavior of var and let in loops and their interaction with asynchronous functions.
IIFE (Immediately Invoked Function Expression):

Question 8 shows how IIFEs create a new scope and immediately execute their code.
Lexical Scope:

Question 9 highlights how functions have access to variables in their lexical scope.
Default Parameters:

Question 10 explains how default parameters work in functions.
*/

// //1
// function test() {
//     console.log(x);
//     var x = 5;
//     console.log(x);
// }

// test(); // undefined, 5


// //2
// function scopeTest() {
//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//     }
//     console.log(a); // What will this log?
//     console.log(b); // What will this log?
//     console.log(c); // What will this log?
// }

// scopeTest(); // 10 not-defined not-defined


// //3
// var globalVar = 'Global';

// function localScope() {
//     var localVar = 'Local';
//     console.log(globalVar); // What will this log?
//     console.log(localVar);  // What will this log?
// }

// localScope();
// console.log(globalVar); // What will this log?
// console.log(localVar);  // What will this log?

// // "global" "local" "global" "not-defined"

// // 4

// console.log(foo());
// console.log(bar());

// function foo() {
//     return 'Function Declaration';
// }

// var bar = function() {
//     return 'Function Expression';
// };

// // 'Function Declaration' 'bar not a function'

// //5 
// function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// console.log(counter1()); // What will this log?
// console.log(counter1()); // What will this log?
// console.log(counter2()); // What will this log?
// console.log(counter2()); // What will this log?

// //1 2 1 2


// // 6
// var x = 1;

// function outer() {
//     var x = 2;

//     function inner() {
//         var x = 3;
//         console.log(x);
//     }

//     inner();
//     console.log(x);
// }

// outer();
// console.log(x);
// // ans = 3 2 1

// // 7

// for (var i = 0; i < 3; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }

// for (let j = 0; j < 3; j++) {
//     setTimeout(function() {
//         console.log(j);
//     }, 1000);
// }
// // ans 3 3 3   0 1 2

// // 8
// (function() {
//     var a = 10;
//     console.log(a);
// })();

// console.log(a);
// // ans = 10 not defined

// //9
// function outer() {
//     let outerVar = 'outer';

//     function inner() {
//         let innerVar = 'inner';
//         console.log(outerVar);
//         console.log(innerVar);
//     }

//     inner();
// }

// outer();

// // ans = outer inner 


// //10

// function greet(name = 'Guest') {
//     console.log(`Hello, ${name}!`);
// }

// greet();
// greet('Alice');

// // ans = guest alice