/*----- Named function -----*/

// Without argument/parameters and without return type

function showWelcomeMessage() {
    console.log("Welcome to the JavaScript world!");
}
showWelcomeMessage();

// With argument/parameters and without return type

function displayAge(age) {
    console.log("You are", age, "years old.");
}
displayAge(25);

// Without argument/parameters and with return type

function getCurrentYear() {
    return new Date().getFullYear();
}

const currentYear = getCurrentYear();
console.log("The current year is", currentYear);

// With argument/parameters and with return type

function multiply(x, y) {
    return x * y;
}

// Calling the function with arguments and storing the return value
const product = multiply(4, 6);
console.log("The product is", product);
