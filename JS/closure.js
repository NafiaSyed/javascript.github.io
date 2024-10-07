function createCounter() {
    let count = 0; // Private variable

    const increment = () => count++;  // Function to increment the count
    const reset = () => { count = 0; }; // Function to reset the count
    const getCount = () => count; // Function to get the current count

    return { increment, reset, getCount }; // Return an object with the functions
}

const myCounter = createCounter();
console.log(myCounter.getCount()); // Output: 0
myCounter.increment();
console.log(myCounter.getCount()); // Output: 1
myCounter.increment();
console.log(myCounter.getCount()); // Output: 2
myCounter.reset(); // Resetting the counter
console.log(myCounter.getCount()); // Output: 0
