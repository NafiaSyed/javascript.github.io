// Hoisting with var
console.log(greeting); // Output: undefined
var greeting = 'Hello, World!';
console.log(greeting); // Output: Hello, World!

/*------- Hoisting with let --------*/
// console.log(month); // ReferenceError: Cannot access 'month' before initialization
let month = 'October';
console.log(month); // Output: October

/*------- Hoisting with const ------- */
// console.log(country); // ReferenceError: Cannot access 'country' before initialization
const country = 'India';
console.log(country); // Output: India

/*------- Hoisting with Function Declaration --------*/
sayHello(); // Output: Hi, I'm Nafia!
function sayHello() {
  console.log("Hi, I'm Nafia!");
}

// After Declaration
sayHello(); // Output: Hi, I'm Nafia!

/*------ Hoisting with Function Expression  -------*/
console.log(sayGoodbye); // Output: undefined
var sayGoodbye = function() {
  console.log('Goodbye! See you later.');
};

// After Declaration
sayGoodbye(); // Output: Goodbye! See you later.
