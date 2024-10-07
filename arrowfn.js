const total = (a, b) => a + b;
console.log(total(10,20)) // 30
console.log(total(80,20)) // 100


const squareOf = (a) => a*a;
console.log(squareOf(6)) // 36
console.log(squareOf(3)) // 9


const subtractDigits = (x, y) => {
    const result = x - y; 
    console.log(`The result of ${x} - ${y} is ${result}`);
    return result; 
};

console.log(subtractDigits(29, 3)); // The result of 29 - 3 is 26