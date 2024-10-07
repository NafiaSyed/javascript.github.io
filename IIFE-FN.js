// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("Hello, I am Iron Man");
})();

(() => {
    console.log("This will execute immediately without waiting");
})();

// Demonstrating variable scoping inside and outside an IIFE
var programmingLanguage = "Python";
(function() {
    var programmingLanguage = 'C++';
    console.log("Inside the IIFE, the language is", programmingLanguage); // Inside the IIFE, the language is C++
})();
console.log("Outside the IIFE, the language is", programmingLanguage); // Outside the IIFE, the language is Python
